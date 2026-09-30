/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ modCount: NonNullable<unknown>, mods: NonNullable<unknown>, downloadCount: NonNullable<unknown>, downloads: NonNullable<unknown>, date: NonNullable<unknown> }} Meta_Home_DescriptionInputs */

const en_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("en", i?.modCount, {});
	const downloadCount__plural = registry.plural("en", i?.downloadCount, {});
	if (modCount__plural === "one" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Download ${i?.mods} Sons of the Forest mod, builds and kits for RedLoader: free, direct and field-tested by the community. ${i?.downloads} download as of ${i?.date}.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`Download ${i?.mods} Sons of the Forest mod, builds and kits for RedLoader: free, direct and field-tested by the community. ${i?.downloads} downloads as of ${i?.date}.`);
	if (downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Download ${i?.mods} Sons of the Forest mods, builds and kits for RedLoader: free, direct and field-tested by the community. ${i?.downloads} download as of ${i?.date}.`);
	return /** @type {LocalizedString} */ (`Download ${i?.mods} Sons of the Forest mods, builds and kits for RedLoader: free, direct and field-tested by the community. ${i?.downloads} downloads as of ${i?.date}.`)
	
};

const es_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("es", i?.modCount, {});
	const downloadCount__plural = registry.plural("es", i?.downloadCount, {});
	if (modCount__plural === "one" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Descarga ${i?.mods} mod, builds y kits de Sons of the Forest para RedLoader: gratis, directos y probados por la comunidad. ${i?.downloads} descarga a ${i?.date}.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`Descarga ${i?.mods} mod, builds y kits de Sons of the Forest para RedLoader: gratis, directos y probados por la comunidad. ${i?.downloads} descargas a ${i?.date}.`);
	if (downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Descarga ${i?.mods} mods, builds y kits de Sons of the Forest para RedLoader: gratis, directos y probados por la comunidad. ${i?.downloads} descarga a ${i?.date}.`);
	return /** @type {LocalizedString} */ (`Descarga ${i?.mods} mods, builds y kits de Sons of the Forest para RedLoader: gratis, directos y probados por la comunidad. ${i?.downloads} descargas a ${i?.date}.`)
	
};

const de_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("de", i?.modCount, {});
	const downloadCount__plural = registry.plural("de", i?.downloadCount, {});
	if (modCount__plural === "one" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Lade ${i?.mods} Mod, Builds und Kits für Sons of the Forest mit RedLoader herunter: kostenlos, direkt und von der Community getestet. ${i?.downloads} Download, Stand ${i?.date}.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`Lade ${i?.mods} Mod, Builds und Kits für Sons of the Forest mit RedLoader herunter: kostenlos, direkt und von der Community getestet. ${i?.downloads} Downloads, Stand ${i?.date}.`);
	if (downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Lade ${i?.mods} Mods, Builds und Kits für Sons of the Forest mit RedLoader herunter: kostenlos, direkt und von der Community getestet. ${i?.downloads} Download, Stand ${i?.date}.`);
	return /** @type {LocalizedString} */ (`Lade ${i?.mods} Mods, Builds und Kits für Sons of the Forest mit RedLoader herunter: kostenlos, direkt und von der Community getestet. ${i?.downloads} Downloads, Stand ${i?.date}.`)
	
};

const fr_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("fr", i?.modCount, {});
	const downloadCount__plural = registry.plural("fr", i?.downloadCount, {});
	if (modCount__plural === "one" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Téléchargez ${i?.mods} mod, builds et kits pour Sons of the Forest avec RedLoader : gratuits, directs et testés par la communauté. ${i?.downloads} téléchargement au ${i?.date}.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`Téléchargez ${i?.mods} mod, builds et kits pour Sons of the Forest avec RedLoader : gratuits, directs et testés par la communauté. ${i?.downloads} téléchargements au ${i?.date}.`);
	if (downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Téléchargez ${i?.mods} mods, builds et kits pour Sons of the Forest avec RedLoader : gratuits, directs et testés par la communauté. ${i?.downloads} téléchargement au ${i?.date}.`);
	return /** @type {LocalizedString} */ (`Téléchargez ${i?.mods} mods, builds et kits pour Sons of the Forest avec RedLoader : gratuits, directs et testés par la communauté. ${i?.downloads} téléchargements au ${i?.date}.`)
	
};

const it_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("it", i?.modCount, {});
	const downloadCount__plural = registry.plural("it", i?.downloadCount, {});
	if (modCount__plural === "one" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Scarica ${i?.mods} mod, build e kit per Sons of the Forest con RedLoader: gratis, diretti e collaudati dalla community. ${i?.downloads} download al ${i?.date}.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`Scarica ${i?.mods} mod, build e kit per Sons of the Forest con RedLoader: gratis, diretti e collaudati dalla community. ${i?.downloads} download al ${i?.date}.`);
	if (downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Scarica ${i?.mods} mod, build e kit per Sons of the Forest con RedLoader: gratis, diretti e collaudati dalla community. ${i?.downloads} download al ${i?.date}.`);
	return /** @type {LocalizedString} */ (`Scarica ${i?.mods} mod, build e kit per Sons of the Forest con RedLoader: gratis, diretti e collaudati dalla community. ${i?.downloads} download al ${i?.date}.`)
	
};

const nl_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("nl", i?.modCount, {});
	const downloadCount__plural = registry.plural("nl", i?.downloadCount, {});
	if (modCount__plural === "one" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Download ${i?.mods} mod, builds en kits voor Sons of the Forest met RedLoader: gratis, direct en getest door de community. ${i?.downloads} download op ${i?.date}.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`Download ${i?.mods} mod, builds en kits voor Sons of the Forest met RedLoader: gratis, direct en getest door de community. ${i?.downloads} downloads op ${i?.date}.`);
	if (downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Download ${i?.mods} mods, builds en kits voor Sons of the Forest met RedLoader: gratis, direct en getest door de community. ${i?.downloads} download op ${i?.date}.`);
	return /** @type {LocalizedString} */ (`Download ${i?.mods} mods, builds en kits voor Sons of the Forest met RedLoader: gratis, direct en getest door de community. ${i?.downloads} downloads op ${i?.date}.`)
	
};

const pl_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("pl", i?.modCount, {});
	const downloadCount__plural = registry.plural("pl", i?.downloadCount, {});
	if (modCount__plural === "one" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} mod, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobranie na dzień ${i?.date}.`);
	if (modCount__plural === "one" && downloadCount__plural === "few") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} mod, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrania na dzień ${i?.date}.`);
	if (modCount__plural === "one" && downloadCount__plural === "many") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} mod, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrań na dzień ${i?.date}.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} mod, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrania na dzień ${i?.date}.`);
	if (modCount__plural === "few" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} mody, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobranie na dzień ${i?.date}.`);
	if (modCount__plural === "few" && downloadCount__plural === "few") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} mody, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrania na dzień ${i?.date}.`);
	if (modCount__plural === "few" && downloadCount__plural === "many") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} mody, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrań na dzień ${i?.date}.`);
	if (modCount__plural === "few") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} mody, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrania na dzień ${i?.date}.`);
	if (modCount__plural === "many" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} modów, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobranie na dzień ${i?.date}.`);
	if (modCount__plural === "many" && downloadCount__plural === "few") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} modów, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrania na dzień ${i?.date}.`);
	if (modCount__plural === "many" && downloadCount__plural === "many") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} modów, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrań na dzień ${i?.date}.`);
	if (modCount__plural === "many") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} modów, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrania na dzień ${i?.date}.`);
	if (downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} moda, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobranie na dzień ${i?.date}.`);
	if (downloadCount__plural === "few") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} moda, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrania na dzień ${i?.date}.`);
	if (downloadCount__plural === "many") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} moda, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrań na dzień ${i?.date}.`);
	return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} moda, buildy i zestawy do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrania na dzień ${i?.date}.`)
	
};

const pt_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("pt", i?.modCount, {});
	const downloadCount__plural = registry.plural("pt", i?.downloadCount, {});
	if (modCount__plural === "one" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Baixe ${i?.mods} mod, builds e kits de Sons of the Forest para o RedLoader: grátis, diretos e testados pela comunidade. ${i?.downloads} download em ${i?.date}.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`Baixe ${i?.mods} mod, builds e kits de Sons of the Forest para o RedLoader: grátis, diretos e testados pela comunidade. ${i?.downloads} downloads em ${i?.date}.`);
	if (downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Baixe ${i?.mods} mods, builds e kits de Sons of the Forest para o RedLoader: grátis, diretos e testados pela comunidade. ${i?.downloads} download em ${i?.date}.`);
	return /** @type {LocalizedString} */ (`Baixe ${i?.mods} mods, builds e kits de Sons of the Forest para o RedLoader: grátis, diretos e testados pela comunidade. ${i?.downloads} downloads em ${i?.date}.`)
	
};

const ru_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("ru", i?.modCount, {});
	const downloadCount__plural = registry.plural("ru", i?.downloadCount, {});
	if (modCount__plural === "one" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} мод, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачивание на ${i?.date}.`);
	if (modCount__plural === "one" && downloadCount__plural === "few") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} мод, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачивания на ${i?.date}.`);
	if (modCount__plural === "one" && downloadCount__plural === "many") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} мод, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачиваний на ${i?.date}.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} мод, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачивания на ${i?.date}.`);
	if (modCount__plural === "few" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} мода, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачивание на ${i?.date}.`);
	if (modCount__plural === "few" && downloadCount__plural === "few") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} мода, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачивания на ${i?.date}.`);
	if (modCount__plural === "few" && downloadCount__plural === "many") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} мода, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачиваний на ${i?.date}.`);
	if (modCount__plural === "few") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} мода, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачивания на ${i?.date}.`);
	if (modCount__plural === "many" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} модов, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачивание на ${i?.date}.`);
	if (modCount__plural === "many" && downloadCount__plural === "few") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} модов, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачивания на ${i?.date}.`);
	if (modCount__plural === "many" && downloadCount__plural === "many") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} модов, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачиваний на ${i?.date}.`);
	if (modCount__plural === "many") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} модов, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачивания на ${i?.date}.`);
	if (downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} мода, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачивание на ${i?.date}.`);
	if (downloadCount__plural === "few") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} мода, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачивания на ${i?.date}.`);
	if (downloadCount__plural === "many") return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} мода, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачиваний на ${i?.date}.`);
	return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} мода, постройки и наборы для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачивания на ${i?.date}.`)
	
};

const sv_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("sv", i?.modCount, {});
	const downloadCount__plural = registry.plural("sv", i?.downloadCount, {});
	if (modCount__plural === "one" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Ladda ner ${i?.mods} modd, byggen och kit till Sons of the Forest för RedLoader: gratis, direkt och testat av communityn. ${i?.downloads} nedladdning per ${i?.date}.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`Ladda ner ${i?.mods} modd, byggen och kit till Sons of the Forest för RedLoader: gratis, direkt och testat av communityn. ${i?.downloads} nedladdningar per ${i?.date}.`);
	if (downloadCount__plural === "one") return /** @type {LocalizedString} */ (`Ladda ner ${i?.mods} moddar, byggen och kit till Sons of the Forest för RedLoader: gratis, direkt och testat av communityn. ${i?.downloads} nedladdning per ${i?.date}.`);
	return /** @type {LocalizedString} */ (`Ladda ner ${i?.mods} moddar, byggen och kit till Sons of the Forest för RedLoader: gratis, direkt och testat av communityn. ${i?.downloads} nedladdningar per ${i?.date}.`)
	
};

const tr_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("tr", i?.modCount, {});
	const downloadCount__plural = registry.plural("tr", i?.downloadCount, {});
	if (modCount__plural === "one" && downloadCount__plural === "one") return /** @type {LocalizedString} */ (`RedLoader için ${i?.mods} Sons of the Forest modunu, yapısını ve kitini indir: ücretsiz, doğrudan ve topluluk tarafından test edilmiş. ${i?.date} itibarıyla ${i?.downloads} indirme.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`RedLoader için ${i?.mods} Sons of the Forest modunu, yapısını ve kitini indir: ücretsiz, doğrudan ve topluluk tarafından test edilmiş. ${i?.date} itibarıyla ${i?.downloads} indirme.`);
	if (downloadCount__plural === "one") return /** @type {LocalizedString} */ (`RedLoader için ${i?.mods} Sons of the Forest modunu, yapısını ve kitini indir: ücretsiz, doğrudan ve topluluk tarafından test edilmiş. ${i?.date} itibarıyla ${i?.downloads} indirme.`);
	return /** @type {LocalizedString} */ (`RedLoader için ${i?.mods} Sons of the Forest modunu, yapısını ve kitini indir: ücretsiz, doğrudan ve topluluk tarafından test edilmiş. ${i?.date} itibarıyla ${i?.downloads} indirme.`)
	
};

const zh_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	const modCount__plural = registry.plural("zh", i?.modCount, {});
	const downloadCount__plural = registry.plural("zh", i?.downloadCount, {});return /** @type {LocalizedString} */ (`下载 ${i?.mods} 个适用于 RedLoader 的《森林之子》模组、建筑与套装：免费、直接下载，并经社区实测。截至 ${i?.date} 共 ${i?.downloads} 次下载。`)
};

const ja_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	const modCount__plural = registry.plural("ja", i?.modCount, {});
	const downloadCount__plural = registry.plural("ja", i?.downloadCount, {});return /** @type {LocalizedString} */ (`RedLoader 対応の Sons of the Forest 向け MOD・建築・キット ${i?.mods} 件を無料で直接ダウンロード。コミュニティが実地でテスト済みです。${i?.date} 時点で ${i?.downloads} ダウンロード。`)
};

/**
* | modCount__plural | downloadCount__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "Download {mods} Sons of the Forest mod, builds and kits for RedLoader: free, direct and field-tested by the community. {downloads} download as of {date}." |
* | "one" | * | "Download {mods} Sons of the Forest mod, builds and kits for RedLoader: free, direct and field-tested by the community. {downloads} downloads as of {date}." |
* | * | "one" | "Download {mods} Sons of the Forest mods, builds and kits for RedLoader: free, direct and field-tested by the community. {downloads} download as of {date}." |
* | * | * | "Download {mods} Sons of the Forest mods, builds and kits for RedLoader: free, direct and field-tested by the community. {downloads} downloads as of {date}." |
*
* @param {Meta_Home_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_home_description = /** @type {((inputs: Meta_Home_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Home_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_home_description(inputs)
	if (locale === "de") return de_meta_home_description(inputs)
	if (locale === "fr") return fr_meta_home_description(inputs)
	if (locale === "it") return it_meta_home_description(inputs)
	if (locale === "nl") return nl_meta_home_description(inputs)
	if (locale === "pl") return pl_meta_home_description(inputs)
	if (locale === "pt") return pt_meta_home_description(inputs)
	if (locale === "ru") return ru_meta_home_description(inputs)
	if (locale === "sv") return sv_meta_home_description(inputs)
	if (locale === "tr") return tr_meta_home_description(inputs)
	if (locale === "zh") return zh_meta_home_description(inputs)
	if (locale === "ja") return ja_meta_home_description(inputs)
	return en_meta_home_description(inputs)
});
