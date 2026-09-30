/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nsfw_AdultInputs */

const en_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I am 18 or older (or the age of majority where I live)`)
};

const es_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tengo 18 años o más (o la mayoría de edad donde vivo)`)
};

const de_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ich bin 18 oder älter (bzw. dort, wo ich lebe, volljährig)`)
};

const fr_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`J’ai 18 ans ou plus (ou l’âge de la majorité là où je vis)`)
};

const it_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ho almeno 18 anni (o la maggiore età dove vivo)`)
};

const nl_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ik ben 18 of ouder (of meerderjarig waar ik woon)`)
};

const pl_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mam co najmniej 18 lat (lub jestem pełnoletni tam, gdzie mieszkam)`)
};

const pt_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tenho 18 anos ou mais (ou a maioridade onde moro)`)
};

const ru_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мне есть 18 лет (или я совершеннолетний там, где живу)`)
};

const sv_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jag är 18 år eller äldre (eller myndig där jag bor)`)
};

const tr_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18 yaşında veya daha büyüğüm (ya da yaşadığım yerde reşidim)`)
};

const zh_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我已年满 18 岁（或已达到所在地的法定成年年龄）`)
};

const ja_settings_nsfw_adult = /** @type {(inputs: Settings_Nsfw_AdultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18 歳以上です（または居住地の成人年齢に達しています）`)
};

/**
* | output |
* | --- |
* | "I am 18 or older (or the age of majority where I live)" |
*
* @param {Settings_Nsfw_AdultInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_nsfw_adult = /** @type {((inputs?: Settings_Nsfw_AdultInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_AdultInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_nsfw_adult(inputs)
	if (locale === "de") return de_settings_nsfw_adult(inputs)
	if (locale === "fr") return fr_settings_nsfw_adult(inputs)
	if (locale === "it") return it_settings_nsfw_adult(inputs)
	if (locale === "nl") return nl_settings_nsfw_adult(inputs)
	if (locale === "pl") return pl_settings_nsfw_adult(inputs)
	if (locale === "pt") return pt_settings_nsfw_adult(inputs)
	if (locale === "ru") return ru_settings_nsfw_adult(inputs)
	if (locale === "sv") return sv_settings_nsfw_adult(inputs)
	if (locale === "tr") return tr_settings_nsfw_adult(inputs)
	if (locale === "zh") return zh_settings_nsfw_adult(inputs)
	if (locale === "ja") return ja_settings_nsfw_adult(inputs)
	return en_settings_nsfw_adult(inputs)
});
