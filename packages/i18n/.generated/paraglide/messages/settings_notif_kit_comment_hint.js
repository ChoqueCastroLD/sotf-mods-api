/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Kit_Comment_HintInputs */

const en_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone comments on a kit you curate.`)
};

const es_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien comenta en un kit que curas.`)
};

const de_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand kommentiert ein Kit, das du kuratierst.`)
};

const fr_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un commente un kit que vous curatez.`)
};

const it_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno commenta un kit che curi.`)
};

const nl_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand reageert op een kit die je beheert.`)
};

const pl_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś komentuje zestaw, którego jesteś autorem.`)
};

const pt_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém comenta em um kit que você cura.`)
};

const ru_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то комментирует набор, который вы ведёте.`)
};

const sv_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon kommenterar ett kit du kurerar.`)
};

const tr_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Küratörlüğünü yaptığın bir kite biri yorum yaptı.`)
};

const zh_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人评论了你策展的套件。`)
};

const ja_settings_notif_kit_comment_hint = /** @type {(inputs: Settings_Notif_Kit_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたがキュレーションしているキットにコメントがあったとき。`)
};

/**
* | output |
* | --- |
* | "Someone comments on a kit you curate." |
*
* @param {Settings_Notif_Kit_Comment_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_kit_comment_hint = /** @type {((inputs?: Settings_Notif_Kit_Comment_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Kit_Comment_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_kit_comment_hint(inputs)
	if (locale === "de") return de_settings_notif_kit_comment_hint(inputs)
	if (locale === "fr") return fr_settings_notif_kit_comment_hint(inputs)
	if (locale === "it") return it_settings_notif_kit_comment_hint(inputs)
	if (locale === "nl") return nl_settings_notif_kit_comment_hint(inputs)
	if (locale === "pl") return pl_settings_notif_kit_comment_hint(inputs)
	if (locale === "pt") return pt_settings_notif_kit_comment_hint(inputs)
	if (locale === "ru") return ru_settings_notif_kit_comment_hint(inputs)
	if (locale === "sv") return sv_settings_notif_kit_comment_hint(inputs)
	if (locale === "tr") return tr_settings_notif_kit_comment_hint(inputs)
	if (locale === "zh") return zh_settings_notif_kit_comment_hint(inputs)
	if (locale === "ja") return ja_settings_notif_kit_comment_hint(inputs)
	return en_settings_notif_kit_comment_hint(inputs)
});
