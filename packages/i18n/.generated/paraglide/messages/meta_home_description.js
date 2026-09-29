/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mods: NonNullable<unknown>, downloads: NonNullable<unknown>, date: NonNullable<unknown> }} Meta_Home_DescriptionInputs */

const en_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download ${i?.mods} Sons of the Forest mods, builds and kits for RedLoader: free, direct and field-tested by the community. ${i?.downloads} downloads as of ${i?.date}.`)
};

const es_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descarga ${i?.mods} mods, builds y kits de Sons of the Forest para RedLoader: gratis, directos y probados por la comunidad. ${i?.downloads} descargas a ${i?.date}.`)
};

const de_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lade ${i?.mods} Mods, Builds und Kits für Sons of the Forest mit RedLoader herunter: kostenlos, direkt und von der Community getestet. ${i?.downloads} Downloads, Stand ${i?.date}.`)
};

const fr_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Téléchargez ${i?.mods} mods, builds et kits pour Sons of the Forest avec RedLoader : gratuits, directs et testés par la communauté. ${i?.downloads} téléchargements au ${i?.date}.`)
};

const it_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scarica ${i?.mods} mod, build e kit per Sons of the Forest con RedLoader: gratis, diretti e collaudati dalla community. ${i?.downloads} download al ${i?.date}.`)
};

const nl_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download ${i?.mods} mods, builds en kits voor Sons of the Forest met RedLoader: gratis, direct en getest door de community. ${i?.downloads} downloads op ${i?.date}.`)
};

const pl_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} modów, buildów i zestawów do Sons of the Forest dla RedLoadera: za darmo, bezpośrednio i sprawdzone przez społeczność. ${i?.downloads} pobrań na dzień ${i?.date}.`)
};

const pt_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Baixe ${i?.mods} mods, builds e kits de Sons of the Forest para o RedLoader: grátis, diretos e testados pela comunidade. ${i?.downloads} downloads em ${i?.date}.`)
};

const ru_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачивайте ${i?.mods} модов, построек и наборов для Sons of the Forest на RedLoader: бесплатно, напрямую и с проверкой сообщества. ${i?.downloads} скачиваний на ${i?.date}.`)
};

const sv_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ladda ner ${i?.mods} moddar, byggen och kit till Sons of the Forest för RedLoader: gratis, direkt och testat av communityn. ${i?.downloads} nedladdningar per ${i?.date}.`)
};

const tr_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader için ${i?.mods} Sons of the Forest modunu, yapısını ve kitini indir: ücretsiz, doğrudan ve topluluk tarafından test edilmiş. ${i?.date} itibarıyla ${i?.downloads} indirme.`)
};

const zh_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下载 ${i?.mods} 个适用于 RedLoader 的《森林之子》模组、建筑与套装：免费、直接下载，并经社区实测。截至 ${i?.date} 共 ${i?.downloads} 次下载。`)
};

const ja_meta_home_description = /** @type {(inputs: Meta_Home_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader 対応の Sons of the Forest 向け MOD・建築・キット ${i?.mods} 件を無料で直接ダウンロード。コミュニティが実地でテスト済みです。${i?.date} 時点で ${i?.downloads} ダウンロード。`)
};

/**
* | output |
* | --- |
* | "Download {mods} Sons of the Forest mods, builds and kits for RedLoader: free, direct and field-tested by the community. {downloads} downloads as of {date}." |
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
