import * as pagesConstants from '../constants';

export const mockTwoColumnDetail = {
    content_media: '/static/images/special-course-two-column.jpg',
    content_title: 'درباره پکیج طراحی',
    content_descriptions:
        'در این پکیج شما همزمان به 3 دوره مهم و کاربردی‌رویت/راینو/اسکچ‌اپ دسترسی خواهید داشت. این دوره‌ها با نگاهی کاملا کاربردی و با توجه به نیاز صنعت طراحی و تولید شده است اولین دوره دوره اسکچ‌آپ هست که پایه طراحی نرم افزاری به حساب می‌آید و پس از دوره رویت برای طراحی یکپارچه با امکان رندرینگ از مدل سه بعدی، تمامی تمرین ها و پروژه‌ها این دوره‌ها واقعی و بر اساس نیاز صنعت معماری ایران طراحی شده است و در آخر دوره راینو برای ترسیم اشکال و طراح‌های پیچیده در معماری با امکان رندرینگ که در آخر پس از آزمون و ارزیابی پایانی گواهینامه معتبر دانشگاه صنعتی امیرکبیر را برای هر سه عنوان دوره این پکیج دریافت خواهید کرد',
};

export const mockTeacherCardItem = [
    {
        id: 1,
        imageUrl: '/static/images/teacher-2.jpg',
        title: 'مجتبی میرحسینی',
        subTitle: 'مدرس دوره',
        description:
            'کارشناس ارشد معماری،عضو هیئت مدیره و مدیرطراحی شرکت مهندسین مشاور دش،مدیریت طرح و اجرای پروژه دفتر مرکزی سامسونگ الکترونیک،مدیریت اجرای خانه دی اس سعادت آباد،طراحی ساختمان غذاخوری دانشگاه آزاد صفادشت،طراحی محوطه،ساختمانهای آموزی و کمک آموزشی و ورزشی دانشگاه آزاد رباط کریم،طراحی و نظارت براجرای ساختمان مسکونی کاج در سعادت آباد',
    },
    {
        id: 2,
        imageUrl: '/static/images/teacher-3.jpg',
        title: 'حسین فراهانی',
        subTitle: 'مدرس دوره',
        description:
            'کارشناس ارشد تکنولوژی معماری دانشگاه هنر اصفهان. سابقه تدریس در دانشگاه آزاد اصفهان، موسسه آموزش عالی میرعماد و مرکز تربیت دبیر شهید رجایی. مدیر حوزه ریاست و ارزیابی عملکرد بنیاد علمی پژوهشی معماری و شهرسازی. جوان منتخب کشور به عنوان هنرمند جوان برگزیده. دارای سوابق آموزشی و اجرایی متعدد و مدیر آتلیه معماری مهرازان طاق و رف.',
    },
    {
        id: 3,
        imageUrl: '/static/images/teacher-1.jpg',
        title: 'سجاد زمانی',
        subTitle: 'مدرس دوره',
        description:
            'مدرس این دوره با بیش از 12 سال سابقه آموزشی در حوزهای علمی، مهندسی و مباحث نرم افزارهای ساختمانی و همکاری مستقیم در طراحی، نظارت و اجرای پروژه های ساختمانی در مقیاس مختلف، مطالب کاربردی و عملکردی نرم افزار و ابزارها را انتقال می دهد',
    },
    // {
    //     id: 4,
    //     imageUrl: '/static/images/teacher-2.jpg',
    //     title: 'مجتبی میرحسینی',
    //     subTitle: 'مدرس دوره',
    //     description:
    //         'کارشناس ارشد معماری،عضو هیئت مدیره و مدیرطراحی شرکت مهندسین مشاور دش،مدیریت طرح و اجرای پروژه دفتر مرکزی سامسونگ الکترونیک، مدیریت اجرای خانه دی اس سعادت آباد،طراحی ساختمان غذاخوری دانشگاه آزاد صفادشت،طراحی محوطه،ساختمانهای آموزی و کمک آموزشی و ورزشی دانشگاه آزاد رباط کریم،طراحی و نظارت براجرای ساختمان مسکونی کاج در سعادت آباد',
    // },
    // {
    //     id: 5,
    //     imageUrl: '/static/images/teacher-3.jpg',
    //     title: 'حسین فراهانی',
    //     subTitle: 'مدرس دوره',
    //     description:
    //         'کارشناس ارشد تکنولوژی معماری دانشگاه هنر اصفهان. سابقه تدریس در دانشگاه آزاد اصفهان، موسسه آموزش عالی میرعماد و مرکز تربیت دبیر شهید رجایی. مدیر حوزه ریاست و ارزیابی عملکرد بنیاد علمی پژوهشی معماری و شهرسازی. جوان منتخب کشور به عنوان هنرمند جوان برگزیده. دارای سوابق آموزشی و اجرایی متعدد و مدیر آتلیه معماری مهرازان طاق و رف.',
    // },
];
export const mockCourses = [
    {
        id: 1,
        thumbnail_media: '/static/images/mock-course-1.jpg',
        header_title: 'دوره آموزشی رویت',
        teachers: [
            {
                name: 'سجاد زمانی',
            },
        ],
        duration: 'زمان دوره: 3 ساعت و 52 دقیقه',
        link: `${pagesConstants.ROUTE_COURSE_SINGLE}/1`,
    },
    {
        id: 2,
        thumbnail_media: '/static/images/mock-course-2.jpg',
        header_title: 'دوره آموزشی رویت',
        teachers: [
            {
                name: 'سجاد زمانی',
            },
        ],
        duration: 'زمان دوره: 3 ساعت و 52 دقیقه',
        link: `${pagesConstants.ROUTE_COURSE_SINGLE}/1`,
    },
    {
        id: 3,
        thumbnail_media: '/static/images/mock-course-3.jpg',
        header_title: 'دوره آموزشی رویت',
        teachers: [
            {
                name: 'سجاد زمانی',
            },
        ],
        duration: 'زمان دوره: 3 ساعت و 52 دقیقه',
        link: `${pagesConstants.ROUTE_COURSE_SINGLE}/1`,
    },
    {
        id: 4,
        thumbnail_media: '/static/images/mock-course-4.jpg',
        header_title: 'دوره آموزشی رویت',
        teachers: [
            {
                name: 'سجاد زمانی',
            },
        ],
        duration: 'زمان دوره: 3 ساعت و 52 دقیقه',
        link: `${pagesConstants.ROUTE_COURSE_SINGLE}/1`,
    },
    {
        id: 5,
        thumbnail_media: '/static/images/mock-course-5.jpg',
        header_title: 'دوره آموزشی رویت',
        teachers: [
            {
                name: 'سجاد زمانی',
            },
        ],
        duration: 'زمان دوره: 3 ساعت و 52 دقیقه',
        link: `${pagesConstants.ROUTE_COURSE_SINGLE}/1`,
    },
    {
        id: 6,
        thumbnail_media: '/static/images/mock-course-6.jpg',
        header_title: 'دوره آموزشی رویت',
        teachers: [
            {
                name: 'سجاد زمانی',
            },
        ],
        duration: 'زمان دوره: 3 ساعت و 52 دقیقه',
        link: `${pagesConstants.ROUTE_COURSE_SINGLE}/1`,
    },
];

export const mockPriceBoxData = {
    course_sell_types: [
        {
            id: 1,
            title: 'قیمت دوره با مدرک',
            price: '۲۱۰.۰۰۰',
            discountedPrice: '۳۲۰.۰۰۰',
            descriptions:
                'شما در دوره خودآموز به تمامی محتوای دوره و همچنین تمرین‌ها و پروژه‌ها دسترسی خواهید داشت، این دوره به کسانی که مشغول به کار هستند پیشنهاد می‌شود',
            buttonTitle: 'انتخاب دوره',
            type: 'with_degree',
            discounted: true,
        },
        {
            id: 2,
            title: 'قیمت دوره با مدرک',
            price: '۲۱۰.۰۰۰',
            discountedPrice: '۳۲۰.۰۰۰',
            description:
                'شما در دوره خودآموز به تمامی محتوای دوره و همچنین تمرین‌ها و پروژه‌ها دسترسی خواهید داشت، این دوره به کسانی که مشغول به کار هستند پیشنهاد می‌شود',
            buttonTitle: 'انتخاب دوره',
            discounted: false,
        },
        {
            id: 3,
            title: 'قیمت دوره با مدرک',
            price: '۲۱۰.۰۰۰',
            discountedPrice: '۳۲۰.۰۰۰',
            description:
                'شما در دوره خودآموز به تمامی محتوای دوره و همچنین تمرین‌ها و پروژه‌ها دسترسی خواهید داشت، این دوره به کسانی که مشغول به کار هستند پیشنهاد می‌شود',
            buttonTitle: 'انتخاب دوره',
            type: 'with_degree',
            discounted: true,
        },
        {
            id: 4,
            title: 'قیمت دوره با مدرک',
            price: '۲۱۰.۰۰۰',
            discountedPrice: '۳۲۰.۰۰۰',
            description:
                'شما در دوره خودآموز به تمامی محتوای دوره و همچنین تمرین‌ها و پروژه‌ها دسترسی خواهید داشت، این دوره به کسانی که مشغول به کار هستند پیشنهاد می‌شود',
            buttonTitle: 'انتخاب دوره',
            type: 'with_degree',

            discounted: false,
        },
        {
            id: 5,
            title: 'قیمت دوره با مدرک',
            price: '۲۱۰.۰۰۰',
            discountedPrice: '۳۲۰.۰۰۰',
            description:
                'شما در دوره خودآموز به تمامی محتوای دوره و همچنین تمرین‌ها و پروژه‌ها دسترسی خواهید داشت، این دوره به کسانی که مشغول به کار هستند پیشنهاد می‌شود',
            buttonTitle: 'انتخاب دوره',
            golden: false,
            discounted: false,
        },
    ],
};
