/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_TextInputs */

const en_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Five quick steps to get set up. Finish them all to earn the «Survived day one» badge.`)
};

const es_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cinco pasos rápidos para empezar. Complétalos todos para ganar la insignia «Sobreviviste al primer día».`)
};

const de_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fünf schnelle Schritte zum Einrichten. Schaffe alle, um das Abzeichen „Ersten Tag überlebt“ zu verdienen.`)
};

const fr_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cinq étapes rapides pour bien démarrer. Terminez-les toutes pour gagner le badge « Premier jour survécu ».`)
};

const it_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cinque passi veloci per iniziare. Completali tutti per ottenere il distintivo «Primo giorno superato».`)
};

const nl_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vijf snelle stappen om te beginnen. Rond ze allemaal af voor de badge ‘Eerste dag overleefd’.`)
};

const pl_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pięć szybkich kroków na start. Ukończ wszystkie, aby zdobyć odznakę „Pierwszy dzień przetrwany”.`)
};

const pt_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cinco passos rápidos para começar. Conclua todos para ganhar a insígnia “Sobreviveu ao primeiro dia”.`)
};

const ru_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пять быстрых шагов для старта. Выполните все, чтобы получить значок «Пережил первый день».`)
};

const sv_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fem snabba steg för att komma i gång. Klara alla för att få märket ”Överlevde första dagen”.`)
};

const tr_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlamak için beş hızlı adım. Hepsini tamamla ve “İlk günü atlattı” rozetini kazan.`)
};

const zh_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`五个快速入门步骤。全部完成即可获得“撑过第一天”徽章。`)
};

const ja_me_onboarding_text = /** @type {(inputs: Me_Onboarding_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`準備のための5つの簡単なステップ。すべて完了すると「1日目を生き延びた」バッジを獲得できます。`)
};

/**
* | output |
* | --- |
* | "Five quick steps to get set up. Finish them all to earn the «Survived day one» badge." |
*
* @param {Me_Onboarding_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_text = /** @type {((inputs?: Me_Onboarding_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_text(inputs)
	if (locale === "de") return de_me_onboarding_text(inputs)
	if (locale === "fr") return fr_me_onboarding_text(inputs)
	if (locale === "it") return it_me_onboarding_text(inputs)
	if (locale === "nl") return nl_me_onboarding_text(inputs)
	if (locale === "pl") return pl_me_onboarding_text(inputs)
	if (locale === "pt") return pt_me_onboarding_text(inputs)
	if (locale === "ru") return ru_me_onboarding_text(inputs)
	if (locale === "sv") return sv_me_onboarding_text(inputs)
	if (locale === "tr") return tr_me_onboarding_text(inputs)
	if (locale === "zh") return zh_me_onboarding_text(inputs)
	if (locale === "ja") return ja_me_onboarding_text(inputs)
	return en_me_onboarding_text(inputs)
});
