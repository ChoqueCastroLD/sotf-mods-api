/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Onboarding_Theme_TextInputs */

const en_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night is easy on the eyes after dark; Day reads best in sunlight.`)
};

const es_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noche descansa la vista cuando oscurece; Día se lee mejor a pleno sol.`)
};

const de_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nacht schont die Augen im Dunkeln; Tag liest sich am besten in der Sonne.`)
};

const fr_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuit repose les yeux dans le noir ; Jour se lit mieux en plein soleil.`)
};

const it_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notte riposa gli occhi al buio; Giorno si legge meglio in pieno sole.`)
};

const nl_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nacht is prettig voor je ogen in het donker; Dag leest het best in de zon.`)
};

const pl_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noc oszczędza oczy po zmroku; Dzień najlepiej czyta się w słońcu.`)
};

const pt_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noite descansa os olhos no escuro; Dia fica melhor sob o sol.`)
};

const ru_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ночь бережёт глаза в темноте, День лучше читается на солнце.`)
};

const sv_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Natt är skonsamt för ögonen i mörker; Dag läses bäst i solljus.`)
};

const tr_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gece karanlıkta gözü yormaz; Gündüz güneş altında daha iyi okunur.`)
};

const zh_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜间模式在暗处更护眼；日间模式在阳光下更清晰。`)
};

const ja_auth_onboarding_theme_text = /** @type {(inputs: Auth_Onboarding_Theme_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ナイトは暗い場所で目にやさしく、デイは日差しの下で読みやすいテーマです。`)
};

/**
* | output |
* | --- |
* | "Night is easy on the eyes after dark; Day reads best in sunlight." |
*
* @param {Auth_Onboarding_Theme_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_onboarding_theme_text = /** @type {((inputs?: Auth_Onboarding_Theme_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Onboarding_Theme_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_onboarding_theme_text(inputs)
	if (locale === "de") return de_auth_onboarding_theme_text(inputs)
	if (locale === "fr") return fr_auth_onboarding_theme_text(inputs)
	if (locale === "it") return it_auth_onboarding_theme_text(inputs)
	if (locale === "nl") return nl_auth_onboarding_theme_text(inputs)
	if (locale === "pl") return pl_auth_onboarding_theme_text(inputs)
	if (locale === "pt") return pt_auth_onboarding_theme_text(inputs)
	if (locale === "ru") return ru_auth_onboarding_theme_text(inputs)
	if (locale === "sv") return sv_auth_onboarding_theme_text(inputs)
	if (locale === "tr") return tr_auth_onboarding_theme_text(inputs)
	if (locale === "zh") return zh_auth_onboarding_theme_text(inputs)
	if (locale === "ja") return ja_auth_onboarding_theme_text(inputs)
	return en_auth_onboarding_theme_text(inputs)
});
