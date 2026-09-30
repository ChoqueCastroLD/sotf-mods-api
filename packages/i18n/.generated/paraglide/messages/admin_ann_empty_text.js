/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Empty_TextInputs */

const en_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use them for patches, maintenance or community news.`)
};

const es_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Úsalos para parches, mantenimiento o noticias de la comunidad.`)
};

const de_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutze sie für Patches, Wartung oder Community-News.`)
};

const fr_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez-les pour les patchs, la maintenance ou les nouvelles de la communauté.`)
};

const it_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usali per patch, manutenzione o notizie della community.`)
};

const nl_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik ze voor patches, onderhoud of communitynieuws.`)
};

const pl_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Używaj ich do łatek, prac serwisowych lub wieści ze społeczności.`)
};

const pt_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use-os para patches, manutenção ou novidades da comunidade.`)
};

const ru_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте их для патчей, техработ или новостей сообщества.`)
};

const sv_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd dem för patchar, underhåll eller nyheter från communityn.`)
};

const tr_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yamalar, bakım veya topluluk haberleri için kullan.`)
};

const zh_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可用于补丁、维护或社区新闻。`)
};

const ja_admin_ann_empty_text = /** @type {(inputs: Admin_Ann_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パッチ、メンテナンス、コミュニティのニュースに使えます。`)
};

/**
* | output |
* | --- |
* | "Use them for patches, maintenance or community news." |
*
* @param {Admin_Ann_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_empty_text = /** @type {((inputs?: Admin_Ann_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_empty_text(inputs)
	if (locale === "de") return de_admin_ann_empty_text(inputs)
	if (locale === "fr") return fr_admin_ann_empty_text(inputs)
	if (locale === "it") return it_admin_ann_empty_text(inputs)
	if (locale === "nl") return nl_admin_ann_empty_text(inputs)
	if (locale === "pl") return pl_admin_ann_empty_text(inputs)
	if (locale === "pt") return pt_admin_ann_empty_text(inputs)
	if (locale === "ru") return ru_admin_ann_empty_text(inputs)
	if (locale === "sv") return sv_admin_ann_empty_text(inputs)
	if (locale === "tr") return tr_admin_ann_empty_text(inputs)
	if (locale === "zh") return zh_admin_ann_empty_text(inputs)
	if (locale === "ja") return ja_admin_ann_empty_text(inputs)
	return en_admin_ann_empty_text(inputs)
});
