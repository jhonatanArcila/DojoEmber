export default function() {
this.namespace = '/api';
this.get('/cars', function(){
  return {
    data: [{
        type: 'car',
        id: '001',
        attributes: {
          name: 'Ferrary',
          city: 'Medellín',
          year: '2012',
          image: 'http://www.diariomotor.com/imagenes/picscache/1440x576c/ferrari-458-italia-1010_1440x576c.jpg'
        }
      }, {
        type: 'car',
        id: '002',
        attributes: {
          name: 'Mazda',
          city: 'Bogotá',
          year: '2011',
          image: 'http://static6.businessinsider.com/image/56ddb7d391058427008b497f-2533-1792/cx5_cut30_iaa_ge_mt_ryugablue_0.jpg'
        }
      }, {
        type: 'car',
        id: '003',
        attributes: {
          name: 'Lamborghini',
          city: 'Cucuta',
          year: '2015',
          image: 'http://o.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/http://o.aolcdn.com/commerce/autodata/images/USC60LGC051A021001.jpg'
        }
      }]
  };
});
}
