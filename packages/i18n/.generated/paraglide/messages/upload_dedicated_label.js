/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dedicated_LabelInputs */

const en_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const es_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const de_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedizierter Server`)
};

const fr_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serveur dédié`)
};

const it_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server dedicato`)
};

const nl_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const pl_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serwer dedykowany`)
};

const pt_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const ru_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выделенный сервер`)
};

const sv_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedikerad server`)
};

const tr_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel sunucu`)
};

const zh_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`专用服务器`)
};

const ja_upload_dedicated_label = /** @type {(inputs: Upload_Dedicated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`専用サーバー`)
};

/**
* | output |
* | --- |
* | "Dedicated server" |
*
* @param {Upload_Dedicated_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dedicated_label = /** @type {((inputs?: Upload_Dedicated_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dedicated_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dedicated_label(inputs)
	if (locale === "de") return de_upload_dedicated_label(inputs)
	if (locale === "fr") return fr_upload_dedicated_label(inputs)
	if (locale === "it") return it_upload_dedicated_label(inputs)
	if (locale === "nl") return nl_upload_dedicated_label(inputs)
	if (locale === "pl") return pl_upload_dedicated_label(inputs)
	if (locale === "pt") return pt_upload_dedicated_label(inputs)
	if (locale === "ru") return ru_upload_dedicated_label(inputs)
	if (locale === "sv") return sv_upload_dedicated_label(inputs)
	if (locale === "tr") return tr_upload_dedicated_label(inputs)
	if (locale === "zh") return zh_upload_dedicated_label(inputs)
	if (locale === "ja") return ja_upload_dedicated_label(inputs)
	return en_upload_dedicated_label(inputs)
});
