/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Well_Documented_HintInputs */

const en_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reach a listing quality of 100 on one of your mods.`)
};

const es_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alcanza una calidad de ficha de 100 en uno de tus mods.`)
};

const de_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erreiche bei einem deiner Mods eine Eintragsqualität von 100.`)
};

const fr_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atteignez une qualité de fiche de 100 sur l’un de vos mods.`)
};

const it_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raggiungi una qualità della scheda di 100 in una tua mod.`)
};

const nl_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haal een vermeldingskwaliteit van 100 bij een van je mods.`)
};

const pl_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osiągnij jakość karty 100 w jednym ze swoich modów.`)
};

const pt_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alcance qualidade de ficha 100 em um dos seus mods.`)
};

const ru_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доведите качество карточки одного из модов до 100.`)
};

const sv_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nå en sidkvalitet på 100 på en av dina moddar.`)
};

const tr_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarından birinde 100 sayfa kalitesine ulaş.`)
};

const zh_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`让你的某个模组页面质量达到 100。`)
};

const ja_profile_badge_well_documented_hint = /** @type {(inputs: Profile_Badge_Well_Documented_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分の MOD のページ品質を 100 にする。`)
};

/**
* | output |
* | --- |
* | "Reach a listing quality of 100 on one of your mods." |
*
* @param {Profile_Badge_Well_Documented_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_well_documented_hint = /** @type {((inputs?: Profile_Badge_Well_Documented_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Well_Documented_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_well_documented_hint(inputs)
	if (locale === "de") return de_profile_badge_well_documented_hint(inputs)
	if (locale === "fr") return fr_profile_badge_well_documented_hint(inputs)
	if (locale === "it") return it_profile_badge_well_documented_hint(inputs)
	if (locale === "nl") return nl_profile_badge_well_documented_hint(inputs)
	if (locale === "pl") return pl_profile_badge_well_documented_hint(inputs)
	if (locale === "pt") return pt_profile_badge_well_documented_hint(inputs)
	if (locale === "ru") return ru_profile_badge_well_documented_hint(inputs)
	if (locale === "sv") return sv_profile_badge_well_documented_hint(inputs)
	if (locale === "tr") return tr_profile_badge_well_documented_hint(inputs)
	if (locale === "zh") return zh_profile_badge_well_documented_hint(inputs)
	if (locale === "ja") return ja_profile_badge_well_documented_hint(inputs)
	return en_profile_badge_well_documented_hint(inputs)
});
