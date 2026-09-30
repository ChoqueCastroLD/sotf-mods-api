/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Notify_LabelInputs */

const en_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notify followers`)
};

const es_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avisar a los seguidores`)
};

const de_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower benachrichtigen`)
};

const fr_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prévenir les abonnés`)
};

const it_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvisa i follower`)
};

const nl_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgers informeren`)
};

const pl_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiadom obserwujących`)
};

const pt_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avisar os seguidores`)
};

const ru_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оповестить подписчиков`)
};

const sv_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddela följare`)
};

const tr_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takipçilere bildir`)
};

const zh_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知关注者`)
};

const ja_upload_notify_label = /** @type {(inputs: Upload_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロワーに通知`)
};

/**
* | output |
* | --- |
* | "Notify followers" |
*
* @param {Upload_Notify_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_notify_label = /** @type {((inputs?: Upload_Notify_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Notify_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_notify_label(inputs)
	if (locale === "de") return de_upload_notify_label(inputs)
	if (locale === "fr") return fr_upload_notify_label(inputs)
	if (locale === "it") return it_upload_notify_label(inputs)
	if (locale === "nl") return nl_upload_notify_label(inputs)
	if (locale === "pl") return pl_upload_notify_label(inputs)
	if (locale === "pt") return pt_upload_notify_label(inputs)
	if (locale === "ru") return ru_upload_notify_label(inputs)
	if (locale === "sv") return sv_upload_notify_label(inputs)
	if (locale === "tr") return tr_upload_notify_label(inputs)
	if (locale === "zh") return zh_upload_notify_label(inputs)
	if (locale === "ja") return ja_upload_notify_label(inputs)
	return en_upload_notify_label(inputs)
});
