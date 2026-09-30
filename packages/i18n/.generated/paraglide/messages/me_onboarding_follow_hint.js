/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Follow_HintInputs */

const en_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tap ♥ to stash it in your backpack and hear about updates.`)
};

const es_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulsa ♥ para guardarlo en tu mochila y enterarte de sus actualizaciones.`)
};

const de_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tippe auf ♥, um ihn in deinem Rucksack zu verstauen und von Updates zu erfahren.`)
};

const fr_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Touchez ♥ pour le ranger dans votre sac et être prévenu de ses mises à jour.`)
};

const it_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tocca ♥ per metterla nello zaino e sapere dei suoi aggiornamenti.`)
};

const nl_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tik op ♥ om hem in je rugzak op te bergen en over updates te horen.`)
};

const pl_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stuknij ♥, aby schować go w plecaku i dowiadywać się o aktualizacjach.`)
};

const pt_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toque em ♥ para guardá-lo na mochila e saber das atualizações.`)
};

const ru_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нажмите ♥, чтобы положить его в рюкзак и узнавать об обновлениях.`)
};

const sv_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryck på ♥ för att lägga den i ryggsäcken och få veta om uppdateringar.`)
};

const tr_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırt çantana koymak ve güncellemelerden haberdar olmak için ♥ simgesine dokun.`)
};

const zh_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`点 ♥ 把它放进背包，并收到更新通知。`)
};

const ja_me_onboarding_follow_hint = /** @type {(inputs: Me_Onboarding_Follow_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`♥ をタップしてバックパックにしまい、アップデートを受け取りましょう。`)
};

/**
* | output |
* | --- |
* | "Tap ♥ to stash it in your backpack and hear about updates." |
*
* @param {Me_Onboarding_Follow_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_follow_hint = /** @type {((inputs?: Me_Onboarding_Follow_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Follow_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_follow_hint(inputs)
	if (locale === "de") return de_me_onboarding_follow_hint(inputs)
	if (locale === "fr") return fr_me_onboarding_follow_hint(inputs)
	if (locale === "it") return it_me_onboarding_follow_hint(inputs)
	if (locale === "nl") return nl_me_onboarding_follow_hint(inputs)
	if (locale === "pl") return pl_me_onboarding_follow_hint(inputs)
	if (locale === "pt") return pt_me_onboarding_follow_hint(inputs)
	if (locale === "ru") return ru_me_onboarding_follow_hint(inputs)
	if (locale === "sv") return sv_me_onboarding_follow_hint(inputs)
	if (locale === "tr") return tr_me_onboarding_follow_hint(inputs)
	if (locale === "zh") return zh_me_onboarding_follow_hint(inputs)
	if (locale === "ja") return ja_me_onboarding_follow_hint(inputs)
	return en_me_onboarding_follow_hint(inputs)
});
