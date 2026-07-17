     // دالة لجلب البيانات
        async function fetchData(spes=null,parent="") {
            try {

                if (spes) {
                    if (parent)
                        parent+="/"
                    // جلب ملف محدد إذا تم تمرير الاسم
                    console.log(`/data/${parent}${spes}.json`)
                    const response = await fetch(`/data/${parent}${spes}.json`);
                    const data = await response.json();
                    // console.log(`بيانات ${spes}:`, data);
                    return data;
                }
                else{

                                    // استخدام Promise.all لجلب الملفين في نفس الوقت
                const [photographerResponse, packagesResponse] = await Promise.all([
                    fetch('data/photgrapher.json'),
                    fetch('data/packages.json')
                ]);

                // تحويل الاستجابات إلى JSON
                const photographerData = await photographerResponse.json();
                const packagesData = await packagesResponse.json();

                // الآن يمكنك استخدام البيانات
                // console.log("بيانات المصور:", photographerData);
                // console.log("بيانات الباقات:", packagesData);
                
                // عرض البيانات في الصفحة
                // displayData(photographerData, packagesData);

                    
                }

            } catch (error) {
                console.error("حدث خطأ أثناء جلب البيانات:", error);
            }
        }

       