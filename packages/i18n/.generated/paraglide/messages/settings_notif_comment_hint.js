/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Comment_HintInputs */

const en_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bundled: several comments arrive as one signal.`)
};

const es_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agrupados: varios comentarios llegan como una sola señal.`)
};

const de_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebündelt: mehrere Kommentare kommen als ein Signal.`)
};

const fr_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regroupés : plusieurs commentaires arrivent en un seul signal.`)
};

const it_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raggruppati: più commenti arrivano come un unico segnale.`)
};

const nl_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebundeld: meerdere reacties komen binnen als één signaal.`)
};

const pl_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbiorczo: kilka komentarzy przychodzi jako jeden sygnał.`)
};

const pt_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agrupados: vários comentários chegam como um só sinal.`)
};

const ru_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Группируются: несколько комментариев приходят одним сигналом.`)
};

const sv_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samlade: flera kommentarer kommer som en signal.`)
};

const tr_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toplu: birkaç yorum tek bir sinyal olarak gelir.`)
};

const zh_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合并发送：多条评论会合成一个信号。`)
};

const ja_settings_notif_comment_hint = /** @type {(inputs: Settings_Notif_Comment_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まとめて通知：複数のコメントを1つのシグナルで届けます。`)
};

/**
* | output |
* | --- |
* | "Bundled: several comments arrive as one signal." |
*
* @param {Settings_Notif_Comment_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_comment_hint = /** @type {((inputs?: Settings_Notif_Comment_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Comment_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_comment_hint(inputs)
	if (locale === "de") return de_settings_notif_comment_hint(inputs)
	if (locale === "fr") return fr_settings_notif_comment_hint(inputs)
	if (locale === "it") return it_settings_notif_comment_hint(inputs)
	if (locale === "nl") return nl_settings_notif_comment_hint(inputs)
	if (locale === "pl") return pl_settings_notif_comment_hint(inputs)
	if (locale === "pt") return pt_settings_notif_comment_hint(inputs)
	if (locale === "ru") return ru_settings_notif_comment_hint(inputs)
	if (locale === "sv") return sv_settings_notif_comment_hint(inputs)
	if (locale === "tr") return tr_settings_notif_comment_hint(inputs)
	if (locale === "zh") return zh_settings_notif_comment_hint(inputs)
	if (locale === "ja") return ja_settings_notif_comment_hint(inputs)
	return en_settings_notif_comment_hint(inputs)
});
