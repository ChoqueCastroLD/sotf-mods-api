/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Download_HintInputs */

const en_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick anything that works on the current build.`)
};

const es_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige cualquiera que funcione en la build actual.`)
};

const de_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nimm einen, der auf dem aktuellen Build läuft.`)
};

const fr_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez-en un qui fonctionne sur la build actuelle.`)
};

const it_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegline una che funzioni sulla build attuale.`)
};

const nl_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies er een die werkt op de huidige build.`)
};

const pl_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz dowolny, który działa na bieżącym buildzie.`)
};

const pt_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha qualquer um que funcione na build atual.`)
};

const ru_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите любой, который работает на текущей сборке.`)
};

const sv_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj vilken som helst som fungerar på det aktuella bygget.`)
};

const tr_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel sürümde çalışan herhangi birini seç.`)
};

const zh_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任选一个在当前版本上可用的模组。`)
};

const ja_me_onboarding_download_hint = /** @type {(inputs: Me_Onboarding_Download_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のビルドで動くものならどれでもOK。`)
};

/**
* | output |
* | --- |
* | "Pick anything that works on the current build." |
*
* @param {Me_Onboarding_Download_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_download_hint = /** @type {((inputs?: Me_Onboarding_Download_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Download_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_download_hint(inputs)
	if (locale === "de") return de_me_onboarding_download_hint(inputs)
	if (locale === "fr") return fr_me_onboarding_download_hint(inputs)
	if (locale === "it") return it_me_onboarding_download_hint(inputs)
	if (locale === "nl") return nl_me_onboarding_download_hint(inputs)
	if (locale === "pl") return pl_me_onboarding_download_hint(inputs)
	if (locale === "pt") return pt_me_onboarding_download_hint(inputs)
	if (locale === "ru") return ru_me_onboarding_download_hint(inputs)
	if (locale === "sv") return sv_me_onboarding_download_hint(inputs)
	if (locale === "tr") return tr_me_onboarding_download_hint(inputs)
	if (locale === "zh") return zh_me_onboarding_download_hint(inputs)
	if (locale === "ja") return ja_me_onboarding_download_hint(inputs)
	return en_me_onboarding_download_hint(inputs)
});
