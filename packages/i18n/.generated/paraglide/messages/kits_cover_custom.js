/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_CustomInputs */

const en_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom image.`)
};

const es_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagen propia.`)
};

const de_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eigenes Bild.`)
};

const fr_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image personnalisée.`)
};

const it_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immagine personalizzata.`)
};

const nl_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eigen afbeelding.`)
};

const pl_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Własny obraz.`)
};

const pt_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagem própria.`)
};

const ru_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Своё изображение.`)
};

const sv_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Egen bild.`)
};

const tr_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel görsel.`)
};

const zh_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义图片。`)
};

const ja_kits_cover_custom = /** @type {(inputs: Kits_Cover_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カスタム画像。`)
};

/**
* | output |
* | --- |
* | "Custom image." |
*
* @param {Kits_Cover_CustomInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_custom = /** @type {((inputs?: Kits_Cover_CustomInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_CustomInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_custom(inputs)
	if (locale === "de") return de_kits_cover_custom(inputs)
	if (locale === "fr") return fr_kits_cover_custom(inputs)
	if (locale === "it") return it_kits_cover_custom(inputs)
	if (locale === "nl") return nl_kits_cover_custom(inputs)
	if (locale === "pl") return pl_kits_cover_custom(inputs)
	if (locale === "pt") return pt_kits_cover_custom(inputs)
	if (locale === "ru") return ru_kits_cover_custom(inputs)
	if (locale === "sv") return sv_kits_cover_custom(inputs)
	if (locale === "tr") return tr_kits_cover_custom(inputs)
	if (locale === "zh") return zh_kits_cover_custom(inputs)
	if (locale === "ja") return ja_kits_cover_custom(inputs)
	return en_kits_cover_custom(inputs)
});
