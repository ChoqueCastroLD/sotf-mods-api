/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Preview_LinkInputs */

const en_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learn more`)
};

const es_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más información`)
};

const de_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr erfahren`)
};

const fr_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En savoir plus`)
};

const it_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scopri di più`)
};

const nl_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer informatie`)
};

const pl_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej informacji`)
};

const pt_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saiba mais`)
};

const ru_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подробнее`)
};

const sv_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läs mer`)
};

const tr_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha fazla bilgi`)
};

const zh_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`了解详情`)
};

const ja_admin_ann_preview_link = /** @type {(inputs: Admin_Ann_Preview_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳しく見る`)
};

/**
* | output |
* | --- |
* | "Learn more" |
*
* @param {Admin_Ann_Preview_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_preview_link = /** @type {((inputs?: Admin_Ann_Preview_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Preview_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_preview_link(inputs)
	if (locale === "de") return de_admin_ann_preview_link(inputs)
	if (locale === "fr") return fr_admin_ann_preview_link(inputs)
	if (locale === "it") return it_admin_ann_preview_link(inputs)
	if (locale === "nl") return nl_admin_ann_preview_link(inputs)
	if (locale === "pl") return pl_admin_ann_preview_link(inputs)
	if (locale === "pt") return pt_admin_ann_preview_link(inputs)
	if (locale === "ru") return ru_admin_ann_preview_link(inputs)
	if (locale === "sv") return sv_admin_ann_preview_link(inputs)
	if (locale === "tr") return tr_admin_ann_preview_link(inputs)
	if (locale === "zh") return zh_admin_ann_preview_link(inputs)
	if (locale === "ja") return ja_admin_ann_preview_link(inputs)
	return en_admin_ann_preview_link(inputs)
});
