/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Nsfw_HintInputs */

const en_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hidden from survivors who haven’t opted in.`)
};

const es_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto para quien no lo haya activado.`)
};

const de_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verborgen für alle, die es nicht aktiviert haben.`)
};

const fr_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masqué pour ceux qui ne l’ont pas activé.`)
};

const it_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascosta a chi non l’ha attivato.`)
};

const nl_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verborgen voor wie het niet heeft ingeschakeld.`)
};

const pl_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryte dla osób, które tego nie włączyły.`)
};

const pt_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto para quem não ativou.`)
};

const ru_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыт от тех, кто его не включил.`)
};

const sv_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dold för dem som inte har aktiverat det.`)
};

const tr_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bunu açmamış olanlardan gizlenir.`)
};

const zh_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对未开启此选项的用户隐藏。`)
};

const ja_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定を有効にしていない人には表示されません。`)
};

/**
* | output |
* | --- |
* | "Hidden from survivors who haven’t opted in." |
*
* @param {Upload_Nsfw_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_nsfw_hint = /** @type {((inputs?: Upload_Nsfw_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Nsfw_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_nsfw_hint(inputs)
	if (locale === "de") return de_upload_nsfw_hint(inputs)
	if (locale === "fr") return fr_upload_nsfw_hint(inputs)
	if (locale === "it") return it_upload_nsfw_hint(inputs)
	if (locale === "nl") return nl_upload_nsfw_hint(inputs)
	if (locale === "pl") return pl_upload_nsfw_hint(inputs)
	if (locale === "pt") return pt_upload_nsfw_hint(inputs)
	if (locale === "ru") return ru_upload_nsfw_hint(inputs)
	if (locale === "sv") return sv_upload_nsfw_hint(inputs)
	if (locale === "tr") return tr_upload_nsfw_hint(inputs)
	if (locale === "zh") return zh_upload_nsfw_hint(inputs)
	if (locale === "ja") return ja_upload_nsfw_hint(inputs)
	return en_upload_nsfw_hint(inputs)
});
