/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Report_ActionInputs */

const en_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to my downloads`)
};

const es_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir a mis descargas`)
};

const de_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu meinen Downloads`)
};

const fr_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller à mes téléchargements`)
};

const it_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai ai miei download`)
};

const nl_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar mijn downloads`)
};

const pl_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do moich pobrań`)
};

const pt_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para meus downloads`)
};

const ru_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`К моим загрузкам`)
};

const sv_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Till mina nedladdningar`)
};

const tr_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirdiklerime git`)
};

const zh_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往我的下载`)
};

const ja_me_onboarding_report_action = /** @type {(inputs: Me_Onboarding_Report_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴へ`)
};

/**
* | output |
* | --- |
* | "Go to my downloads" |
*
* @param {Me_Onboarding_Report_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_report_action = /** @type {((inputs?: Me_Onboarding_Report_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Report_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_report_action(inputs)
	if (locale === "de") return de_me_onboarding_report_action(inputs)
	if (locale === "fr") return fr_me_onboarding_report_action(inputs)
	if (locale === "it") return it_me_onboarding_report_action(inputs)
	if (locale === "nl") return nl_me_onboarding_report_action(inputs)
	if (locale === "pl") return pl_me_onboarding_report_action(inputs)
	if (locale === "pt") return pt_me_onboarding_report_action(inputs)
	if (locale === "ru") return ru_me_onboarding_report_action(inputs)
	if (locale === "sv") return sv_me_onboarding_report_action(inputs)
	if (locale === "tr") return tr_me_onboarding_report_action(inputs)
	if (locale === "zh") return zh_me_onboarding_report_action(inputs)
	if (locale === "ja") return ja_me_onboarding_report_action(inputs)
	return en_me_onboarding_report_action(inputs)
});
