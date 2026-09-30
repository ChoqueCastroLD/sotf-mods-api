/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_New_IntroInputs */

const en_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What are you sharing with the survivors today?`)
};

const es_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Qué compartes hoy con los supervivientes?`)
};

const de_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was teilst du heute mit den Überlebenden?`)
};

const fr_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Que partagez-vous avec les survivants aujourd’hui ?`)
};

const it_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa condividi oggi con i sopravvissuti?`)
};

const nl_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat deel je vandaag met de overlevenden?`)
};

const pl_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czym dzisiaj podzielisz się z ocalałymi?`)
};

const pt_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que você vai compartilhar com os sobreviventes hoje?`)
};

const ru_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чем вы поделитесь с выжившими сегодня?`)
};

const sv_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad delar du med överlevarna i dag?`)
};

const tr_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugün hayatta kalanlarla ne paylaşıyorsun?`)
};

const zh_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今天你想和幸存者们分享什么？`)
};

const ja_upload_new_intro = /** @type {(inputs: Upload_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今日はサバイバーに何を届けますか？`)
};

/**
* | output |
* | --- |
* | "What are you sharing with the survivors today?" |
*
* @param {Upload_New_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_new_intro = /** @type {((inputs?: Upload_New_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_New_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_new_intro(inputs)
	if (locale === "de") return de_upload_new_intro(inputs)
	if (locale === "fr") return fr_upload_new_intro(inputs)
	if (locale === "it") return it_upload_new_intro(inputs)
	if (locale === "nl") return nl_upload_new_intro(inputs)
	if (locale === "pl") return pl_upload_new_intro(inputs)
	if (locale === "pt") return pt_upload_new_intro(inputs)
	if (locale === "ru") return ru_upload_new_intro(inputs)
	if (locale === "sv") return sv_upload_new_intro(inputs)
	if (locale === "tr") return tr_upload_new_intro(inputs)
	if (locale === "zh") return zh_upload_new_intro(inputs)
	if (locale === "ja") return ja_upload_new_intro(inputs)
	return en_upload_new_intro(inputs)
});
