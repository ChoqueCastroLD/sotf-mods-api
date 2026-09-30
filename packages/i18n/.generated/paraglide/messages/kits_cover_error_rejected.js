/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_Error_RejectedInputs */

const en_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The image was rejected.`)
};

const es_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La imagen ha sido rechazada.`)
};

const de_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Bild wurde abgelehnt.`)
};

const fr_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’image a été refusée.`)
};

const it_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’immagine è stata rifiutata.`)
};

const nl_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De afbeelding is geweigerd.`)
};

const pl_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obraz został odrzucony.`)
};

const pt_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A imagem foi recusada.`)
};

const ru_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображение отклонено.`)
};

const sv_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilden avvisades.`)
};

const tr_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel reddedildi.`)
};

const zh_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片被拒绝。`)
};

const ja_kits_cover_error_rejected = /** @type {(inputs: Kits_Cover_Error_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像が拒否されました。`)
};

/**
* | output |
* | --- |
* | "The image was rejected." |
*
* @param {Kits_Cover_Error_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_error_rejected = /** @type {((inputs?: Kits_Cover_Error_RejectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_Error_RejectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_error_rejected(inputs)
	if (locale === "de") return de_kits_cover_error_rejected(inputs)
	if (locale === "fr") return fr_kits_cover_error_rejected(inputs)
	if (locale === "it") return it_kits_cover_error_rejected(inputs)
	if (locale === "nl") return nl_kits_cover_error_rejected(inputs)
	if (locale === "pl") return pl_kits_cover_error_rejected(inputs)
	if (locale === "pt") return pt_kits_cover_error_rejected(inputs)
	if (locale === "ru") return ru_kits_cover_error_rejected(inputs)
	if (locale === "sv") return sv_kits_cover_error_rejected(inputs)
	if (locale === "tr") return tr_kits_cover_error_rejected(inputs)
	if (locale === "zh") return zh_kits_cover_error_rejected(inputs)
	if (locale === "ja") return ja_kits_cover_error_rejected(inputs)
	return en_kits_cover_error_rejected(inputs)
});
