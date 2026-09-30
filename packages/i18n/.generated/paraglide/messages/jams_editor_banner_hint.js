/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Banner_HintInputs */

const en_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An https:// link to an image, ideally 1600×600.`)
};

const es_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un enlace https:// a una imagen, idealmente de 1600×600.`)
};

const de_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein https://-Link zu einem Bild, idealerweise 1600×600.`)
};

const fr_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un lien https:// vers une image, idéalement 1600×600.`)
};

const it_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un link https:// a un'immagine, idealmente 1600×600.`)
};

const nl_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een https://-link naar een afbeelding, bij voorkeur 1600×600.`)
};

const pl_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link https:// do obrazu, najlepiej 1600×600.`)
};

const pt_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um link https:// para uma imagem, idealmente 1600×600.`)
};

const ru_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка https:// на изображение, лучше 1600×600.`)
};

const sv_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En https://-länk till en bild, helst 1600×600.`)
};

const tr_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir görsele giden https:// bağlantısı, ideal olarak 1600×600.`)
};

const zh_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`指向图片的 https:// 链接，建议 1600×600。`)
};

const ja_jams_editor_banner_hint = /** @type {(inputs: Jams_Editor_Banner_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像への https:// リンク（推奨 1600×600）。`)
};

/**
* | output |
* | --- |
* | "An https:// link to an image, ideally 1600×600." |
*
* @param {Jams_Editor_Banner_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_banner_hint = /** @type {((inputs?: Jams_Editor_Banner_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Banner_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_banner_hint(inputs)
	if (locale === "de") return de_jams_editor_banner_hint(inputs)
	if (locale === "fr") return fr_jams_editor_banner_hint(inputs)
	if (locale === "it") return it_jams_editor_banner_hint(inputs)
	if (locale === "nl") return nl_jams_editor_banner_hint(inputs)
	if (locale === "pl") return pl_jams_editor_banner_hint(inputs)
	if (locale === "pt") return pt_jams_editor_banner_hint(inputs)
	if (locale === "ru") return ru_jams_editor_banner_hint(inputs)
	if (locale === "sv") return sv_jams_editor_banner_hint(inputs)
	if (locale === "tr") return tr_jams_editor_banner_hint(inputs)
	if (locale === "zh") return zh_jams_editor_banner_hint(inputs)
	if (locale === "ja") return ja_jams_editor_banner_hint(inputs)
	return en_jams_editor_banner_hint(inputs)
});
