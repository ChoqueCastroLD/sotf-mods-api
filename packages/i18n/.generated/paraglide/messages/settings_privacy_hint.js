/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Privacy_HintInputs */

const en_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What others see on your profile and your download history.`)
};

const es_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo que otros ven en tu perfil y tu historial de descargas.`)
};

const de_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was andere auf deinem Profil sehen, und dein Download-Verlauf.`)
};

const fr_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que les autres voient sur votre profil et votre historique de téléchargements.`)
};

const it_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa vedono gli altri sul tuo profilo e la cronologia dei download.`)
};

const nl_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat anderen op je profiel zien, en je downloadgeschiedenis.`)
};

const pl_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co inni widzą na twoim profilu oraz historia pobrań.`)
};

const pt_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que os outros veem no seu perfil e seu histórico de downloads.`)
};

const ru_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что другие видят в вашем профиле, и история загрузок.`)
};

const sv_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad andra ser på din profil, och din nedladdningshistorik.`)
};

const tr_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başkalarının profilinde ne gördüğü ve indirme geçmişin.`)
};

const zh_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`别人在你的个人资料上能看到什么，以及你的下载记录。`)
};

const ja_settings_privacy_hint = /** @type {(inputs: Settings_Privacy_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`他の人がプロフィールで見られる内容と、ダウンロード履歴。`)
};

/**
* | output |
* | --- |
* | "What others see on your profile and your download history." |
*
* @param {Settings_Privacy_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_privacy_hint = /** @type {((inputs?: Settings_Privacy_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Privacy_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_privacy_hint(inputs)
	if (locale === "de") return de_settings_privacy_hint(inputs)
	if (locale === "fr") return fr_settings_privacy_hint(inputs)
	if (locale === "it") return it_settings_privacy_hint(inputs)
	if (locale === "nl") return nl_settings_privacy_hint(inputs)
	if (locale === "pl") return pl_settings_privacy_hint(inputs)
	if (locale === "pt") return pt_settings_privacy_hint(inputs)
	if (locale === "ru") return ru_settings_privacy_hint(inputs)
	if (locale === "sv") return sv_settings_privacy_hint(inputs)
	if (locale === "tr") return tr_settings_privacy_hint(inputs)
	if (locale === "zh") return zh_settings_privacy_hint(inputs)
	if (locale === "ja") return ja_settings_privacy_hint(inputs)
	return en_settings_privacy_hint(inputs)
});
