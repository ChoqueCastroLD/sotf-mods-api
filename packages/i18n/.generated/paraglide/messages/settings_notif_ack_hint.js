/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Ack_HintInputs */

const en_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An author saw or fixed a problem you reported.`)
};

const es_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un autor ha visto o arreglado un problema que informaste.`)
};

const de_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Autor hat ein von dir gemeldetes Problem gesehen oder behoben.`)
};

const fr_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un auteur a vu ou corrigé un problème que vous avez signalé.`)
};

const it_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un autore ha visto o risolto un problema che hai segnalato.`)
};

const nl_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een maker heeft een probleem dat jij meldde gezien of opgelost.`)
};

const pl_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor zobaczył lub naprawił zgłoszony przez ciebie problem.`)
};

const pt_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um autor viu ou corrigiu um problema que você relatou.`)
};

const ru_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор увидел или исправил проблему, о которой вы сообщили.`)
};

const sv_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En skapare har sett eller åtgärdat ett problem du rapporterade.`)
};

const tr_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir yapımcı bildirdiğin bir sorunu gördü ya da düzeltti.`)
};

const zh_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者看到或修复了你报告的问题。`)
};

const ja_settings_notif_ack_hint = /** @type {(inputs: Settings_Notif_Ack_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたが報告した問題を作者が確認または修正しました。`)
};

/**
* | output |
* | --- |
* | "An author saw or fixed a problem you reported." |
*
* @param {Settings_Notif_Ack_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_ack_hint = /** @type {((inputs?: Settings_Notif_Ack_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Ack_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_ack_hint(inputs)
	if (locale === "de") return de_settings_notif_ack_hint(inputs)
	if (locale === "fr") return fr_settings_notif_ack_hint(inputs)
	if (locale === "it") return it_settings_notif_ack_hint(inputs)
	if (locale === "nl") return nl_settings_notif_ack_hint(inputs)
	if (locale === "pl") return pl_settings_notif_ack_hint(inputs)
	if (locale === "pt") return pt_settings_notif_ack_hint(inputs)
	if (locale === "ru") return ru_settings_notif_ack_hint(inputs)
	if (locale === "sv") return sv_settings_notif_ack_hint(inputs)
	if (locale === "tr") return tr_settings_notif_ack_hint(inputs)
	if (locale === "zh") return zh_settings_notif_ack_hint(inputs)
	if (locale === "ja") return ja_settings_notif_ack_hint(inputs)
	return en_settings_notif_ack_hint(inputs)
});
