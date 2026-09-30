/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_ReplaceInputs */

const en_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replace image`)
};

const es_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar imagen`)
};

const de_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild ersetzen`)
};

const fr_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remplacer l’image`)
};

const it_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sostituisci immagine`)
};

const nl_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeelding vervangen`)
};

const pl_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień obraz`)
};

const pt_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trocar imagem`)
};

const ru_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заменить изображение`)
};

const sv_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byt bild`)
};

const tr_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görseli değiştir`)
};

const zh_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更换图片`)
};

const ja_kits_cover_replace = /** @type {(inputs: Kits_Cover_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像を差し替え`)
};

/**
* | output |
* | --- |
* | "Replace image" |
*
* @param {Kits_Cover_ReplaceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_replace = /** @type {((inputs?: Kits_Cover_ReplaceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_ReplaceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_replace(inputs)
	if (locale === "de") return de_kits_cover_replace(inputs)
	if (locale === "fr") return fr_kits_cover_replace(inputs)
	if (locale === "it") return it_kits_cover_replace(inputs)
	if (locale === "nl") return nl_kits_cover_replace(inputs)
	if (locale === "pl") return pl_kits_cover_replace(inputs)
	if (locale === "pt") return pt_kits_cover_replace(inputs)
	if (locale === "ru") return ru_kits_cover_replace(inputs)
	if (locale === "sv") return sv_kits_cover_replace(inputs)
	if (locale === "tr") return tr_kits_cover_replace(inputs)
	if (locale === "zh") return zh_kits_cover_replace(inputs)
	if (locale === "ja") return ja_kits_cover_replace(inputs)
	return en_kits_cover_replace(inputs)
});
