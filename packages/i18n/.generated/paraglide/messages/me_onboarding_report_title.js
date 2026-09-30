/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Report_TitleInputs */

const en_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell us if it worked`)
};

const es_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuéntanos si funcionó`)
};

const de_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sag uns, ob es funktioniert hat`)
};

const fr_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dites-nous si ça a marché`)
};

const it_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dicci se ha funzionato`)
};

const nl_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laat weten of het werkte`)
};

const pl_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daj znać, czy zadziałało`)
};

const pt_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conte se funcionou`)
};

const ru_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Расскажите, заработало ли`)
};

const sv_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berätta om det fungerade`)
};

const tr_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalışıp çalışmadığını söyle`)
};

const zh_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告诉我们能不能用`)
};

const ja_me_onboarding_report_title = /** @type {(inputs: Me_Onboarding_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動いたか教えて`)
};

/**
* | output |
* | --- |
* | "Tell us if it worked" |
*
* @param {Me_Onboarding_Report_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_report_title = /** @type {((inputs?: Me_Onboarding_Report_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Report_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_report_title(inputs)
	if (locale === "de") return de_me_onboarding_report_title(inputs)
	if (locale === "fr") return fr_me_onboarding_report_title(inputs)
	if (locale === "it") return it_me_onboarding_report_title(inputs)
	if (locale === "nl") return nl_me_onboarding_report_title(inputs)
	if (locale === "pl") return pl_me_onboarding_report_title(inputs)
	if (locale === "pt") return pt_me_onboarding_report_title(inputs)
	if (locale === "ru") return ru_me_onboarding_report_title(inputs)
	if (locale === "sv") return sv_me_onboarding_report_title(inputs)
	if (locale === "tr") return tr_me_onboarding_report_title(inputs)
	if (locale === "zh") return zh_me_onboarding_report_title(inputs)
	if (locale === "ja") return ja_me_onboarding_report_title(inputs)
	return en_me_onboarding_report_title(inputs)
});
