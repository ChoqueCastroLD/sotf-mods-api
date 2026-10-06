/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_History_TextInputs */

const en_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When it’s on, the downloads you make while logged in are listed in «My downloads» so we can tell you about updates.`)
};

const es_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si está activado, las descargas que hagas con la sesión iniciada aparecen en «Mis descargas» para avisarte de las actualizaciones.`)
};

const de_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wenn er an ist, erscheinen deine Downloads im angemeldeten Zustand unter „Meine Downloads“, damit wir dich über Updates informieren können.`)
};

const fr_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`S’il est activé, les téléchargements faits en étant connecté apparaissent dans « Mes téléchargements » pour que nous puissions vous signaler les mises à jour.`)
};

const it_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se è attiva, i download fatti con l’accesso effettuato compaiono in «I miei download», così possiamo avvisarti degli aggiornamenti.`)
};

const nl_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als die aan staat, verschijnen je ingelogde downloads in ‘Mijn downloads’ zodat we je over updates kunnen vertellen.`)
};

const pl_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gdy jest włączona, pobrania dokonane po zalogowaniu trafiają do „Moich pobrań”, abyśmy mogli informować cię o aktualizacjach.`)
};

const pt_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quando está ativado, os downloads feitos com a sessão iniciada aparecem em “Meus downloads” para avisarmos você sobre atualizações.`)
};

const ru_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Когда она включена, загрузки после входа попадают в «Мои загрузки», чтобы мы могли сообщать об обновлениях.`)
};

const sv_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`När den är på visas dina nedladdningar som inloggad under ”Mina nedladdningar” så att vi kan berätta om uppdateringar.`)
};

const tr_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıkken, oturum açıkken yaptığın indirmeler “İndirdiklerim”de listelenir; böylece sana güncellemeleri haber verebiliriz.`)
};

const zh_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开启后，你登录时的下载会出现在“我的下载”中，方便我们提醒你更新。`)
};

const ja_settings_history_text = /** @type {(inputs: Settings_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オンにすると、ログイン中のダウンロードが「ダウンロード履歴」に表示され、アップデートをお知らせできます。`)
};

/**
* | output |
* | --- |
* | "When it’s on, the downloads you make while logged in are listed in «My downloads» so we can tell you about updates." |
*
* @param {Settings_History_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_history_text = /** @type {((inputs?: Settings_History_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_History_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_history_text(inputs)
	if (locale === "de") return de_settings_history_text(inputs)
	if (locale === "fr") return fr_settings_history_text(inputs)
	if (locale === "it") return it_settings_history_text(inputs)
	if (locale === "nl") return nl_settings_history_text(inputs)
	if (locale === "pl") return pl_settings_history_text(inputs)
	if (locale === "pt") return pt_settings_history_text(inputs)
	if (locale === "ru") return ru_settings_history_text(inputs)
	if (locale === "sv") return sv_settings_history_text(inputs)
	if (locale === "tr") return tr_settings_history_text(inputs)
	if (locale === "zh") return zh_settings_history_text(inputs)
	if (locale === "ja") return ja_settings_history_text(inputs)
	return en_settings_history_text(inputs)
});
