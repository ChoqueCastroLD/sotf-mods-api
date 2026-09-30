/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Report_HintInputs */

const en_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Answer «Did it work?» for a mod you downloaded.`)
};

const es_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responde «¿Funcionó?» sobre un mod que hayas descargado.`)
};

const de_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beantworte „Hat es funktioniert?“ für einen heruntergeladenen Mod.`)
};

const fr_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répondez à « Ça a marché ? » pour un mod téléchargé.`)
};

const it_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rispondi a «Ha funzionato?» per una mod che hai scaricato.`)
};

const nl_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beantwoord ‘Werkte het?’ voor een mod die je hebt gedownload.`)
};

const pl_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedz na „Zadziałało?” dla pobranego moda.`)
};

const pt_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responda “Funcionou?” sobre um mod que você baixou.`)
};

const ru_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответьте «Заработало?» о скачанном моде.`)
};

const sv_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svara på ”Fungerade det?” för en modd du laddat ned.`)
};

const tr_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirdiğin bir mod için “Çalıştı mı?” sorusunu yanıtla.`)
};

const zh_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为你下载过的模组回答“能用吗？”。`)
};

const ja_me_onboarding_report_hint = /** @type {(inputs: Me_Onboarding_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードしたMODについて「動きましたか？」に答えてください。`)
};

/**
* | output |
* | --- |
* | "Answer «Did it work?» for a mod you downloaded." |
*
* @param {Me_Onboarding_Report_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_report_hint = /** @type {((inputs?: Me_Onboarding_Report_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Report_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_report_hint(inputs)
	if (locale === "de") return de_me_onboarding_report_hint(inputs)
	if (locale === "fr") return fr_me_onboarding_report_hint(inputs)
	if (locale === "it") return it_me_onboarding_report_hint(inputs)
	if (locale === "nl") return nl_me_onboarding_report_hint(inputs)
	if (locale === "pl") return pl_me_onboarding_report_hint(inputs)
	if (locale === "pt") return pt_me_onboarding_report_hint(inputs)
	if (locale === "ru") return ru_me_onboarding_report_hint(inputs)
	if (locale === "sv") return sv_me_onboarding_report_hint(inputs)
	if (locale === "tr") return tr_me_onboarding_report_hint(inputs)
	if (locale === "zh") return zh_me_onboarding_report_hint(inputs)
	if (locale === "ja") return ja_me_onboarding_report_hint(inputs)
	return en_me_onboarding_report_hint(inputs)
});
