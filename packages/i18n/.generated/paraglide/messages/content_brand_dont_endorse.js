/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Dont_EndorseInputs */

const en_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggest that SOTF Mods endorses, sponsors or reviewed your project.`)
};

const es_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No des a entender que SOTF Mods respalda, patrocina o ha revisado tu proyecto.`)
};

const de_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den Eindruck erwecken, SOTF Mods unterstütze, sponsere oder habe dein Projekt geprüft.`)
};

const fr_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laisser entendre que SOTF Mods soutient, sponsorise ou a validé votre projet.`)
};

const it_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non lasciar intendere che SOTF Mods sostenga, sponsorizzi o abbia verificato il tuo progetto.`)
};

const nl_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet suggereren dat SOTF Mods je project steunt, sponsort of heeft gecontroleerd.`)
};

const pl_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie sugeruj, że SOTF Mods popiera, sponsoruje lub zweryfikował twój projekt.`)
};

const pt_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não sugira que o SOTF Mods apoia, patrocina ou revisou seu projeto.`)
};

const ru_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Намекать, что SOTF Mods поддерживает, спонсирует или проверил ваш проект.`)
};

const sv_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Att antyda att SOTF Mods stöder, sponsrar eller har granskat ditt projekt.`)
};

const tr_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’un projeni desteklediğini, sponsor olduğunu veya incelediğini ima etme.`)
};

const zh_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不要暗示 SOTF Mods 认可、赞助或审核过你的项目。`)
};

const ja_content_brand_dont_endorse = /** @type {(inputs: Content_Brand_Dont_EndorseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods があなたのプロジェクトを支持・後援・審査したかのように示さないでください。`)
};

/**
* | output |
* | --- |
* | "Suggest that SOTF Mods endorses, sponsors or reviewed your project." |
*
* @param {Content_Brand_Dont_EndorseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_dont_endorse = /** @type {((inputs?: Content_Brand_Dont_EndorseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Dont_EndorseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_dont_endorse(inputs)
	if (locale === "de") return de_content_brand_dont_endorse(inputs)
	if (locale === "fr") return fr_content_brand_dont_endorse(inputs)
	if (locale === "it") return it_content_brand_dont_endorse(inputs)
	if (locale === "nl") return nl_content_brand_dont_endorse(inputs)
	if (locale === "pl") return pl_content_brand_dont_endorse(inputs)
	if (locale === "pt") return pt_content_brand_dont_endorse(inputs)
	if (locale === "ru") return ru_content_brand_dont_endorse(inputs)
	if (locale === "sv") return sv_content_brand_dont_endorse(inputs)
	if (locale === "tr") return tr_content_brand_dont_endorse(inputs)
	if (locale === "zh") return zh_content_brand_dont_endorse(inputs)
	if (locale === "ja") return ja_content_brand_dont_endorse(inputs)
	return en_content_brand_dont_endorse(inputs)
});
