/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Field_Href_HintInputs */

const en_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A site path such as /patch-radar, or an https:// address.`)
};

const es_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una ruta del sitio como /patch-radar o una dirección https://.`)
};

const de_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Pfad der Website wie /patch-radar oder eine https://-Adresse.`)
};

const fr_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un chemin du site comme /patch-radar, ou une adresse https://.`)
};

const it_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un percorso del sito come /patch-radar o un indirizzo https://.`)
};

const nl_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een pad van de site zoals /patch-radar, of een https://-adres.`)
};

const pl_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ścieżka strony, np. /patch-radar, albo adres https://.`)
};

const pt_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um caminho do site como /patch-radar ou um endereço https://.`)
};

const ru_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Путь на сайте, например /patch-radar, или адрес https://.`)
};

const sv_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En sökväg på sajten som /patch-radar, eller en https://-adress.`)
};

const tr_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/patch-radar gibi bir site yolu veya bir https:// adresi.`)
};

const zh_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站内路径（如 /patch-radar）或 https:// 地址。`)
};

const ja_admin_ann_field_href_hint = /** @type {(inputs: Admin_Ann_Field_Href_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/patch-radar のようなサイト内パス、または https:// のアドレス。`)
};

/**
* | output |
* | --- |
* | "A site path such as /patch-radar, or an https:// address." |
*
* @param {Admin_Ann_Field_Href_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_field_href_hint = /** @type {((inputs?: Admin_Ann_Field_Href_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Field_Href_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_field_href_hint(inputs)
	if (locale === "de") return de_admin_ann_field_href_hint(inputs)
	if (locale === "fr") return fr_admin_ann_field_href_hint(inputs)
	if (locale === "it") return it_admin_ann_field_href_hint(inputs)
	if (locale === "nl") return nl_admin_ann_field_href_hint(inputs)
	if (locale === "pl") return pl_admin_ann_field_href_hint(inputs)
	if (locale === "pt") return pt_admin_ann_field_href_hint(inputs)
	if (locale === "ru") return ru_admin_ann_field_href_hint(inputs)
	if (locale === "sv") return sv_admin_ann_field_href_hint(inputs)
	if (locale === "tr") return tr_admin_ann_field_href_hint(inputs)
	if (locale === "zh") return zh_admin_ann_field_href_hint(inputs)
	if (locale === "ja") return ja_admin_ann_field_href_hint(inputs)
	return en_admin_ann_field_href_hint(inputs)
});
