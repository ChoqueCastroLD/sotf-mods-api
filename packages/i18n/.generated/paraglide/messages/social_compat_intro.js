/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_IntroInputs */

const en_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell other survivors whether this mod works on your setup. It takes 20 seconds.`)
};

const es_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuenta a otros supervivientes si este mod funciona en tu configuración. Son 20 segundos.`)
};

const de_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sag anderen Überlebenden, ob dieser Mod bei dir funktioniert. Dauert 20 Sekunden.`)
};

const fr_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dites aux autres survivants si ce mod marche chez vous. Ça prend 20 secondes.`)
};

const it_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Di’ agli altri sopravvissuti se questa mod funziona nella tua configurazione. Bastano 20 secondi.`)
};

const nl_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laat andere overlevers weten of deze mod werkt bij jou. Het kost 20 seconden.`)
};

const pl_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiedz innym ocalałym, czy ten mod działa u ciebie. To zajmie 20 sekund.`)
};

const pt_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conte a outros sobreviventes se este mod funciona na sua configuração. Leva 20 segundos.`)
};

const ru_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Расскажите другим выжившим, работает ли мод у вас. Это займёт 20 секунд.`)
};

const sv_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berätta för andra överlevare om modden fungerar hos dig. Det tar 20 sekunder.`)
};

const tr_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer hayatta kalanlara bu modun sende çalışıp çalışmadığını söyle. 20 saniye sürer.`)
};

const zh_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告诉其他幸存者这个模组在你的环境下是否可用，只需 20 秒。`)
};

const ja_social_compat_intro = /** @type {(inputs: Social_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD があなたの環境で動くか、ほかのサバイバーに教えてください。20 秒で終わります。`)
};

/**
* | output |
* | --- |
* | "Tell other survivors whether this mod works on your setup. It takes 20 seconds." |
*
* @param {Social_Compat_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_intro = /** @type {((inputs?: Social_Compat_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_intro(inputs)
	if (locale === "de") return de_social_compat_intro(inputs)
	if (locale === "fr") return fr_social_compat_intro(inputs)
	if (locale === "it") return it_social_compat_intro(inputs)
	if (locale === "nl") return nl_social_compat_intro(inputs)
	if (locale === "pl") return pl_social_compat_intro(inputs)
	if (locale === "pt") return pt_social_compat_intro(inputs)
	if (locale === "ru") return ru_social_compat_intro(inputs)
	if (locale === "sv") return sv_social_compat_intro(inputs)
	if (locale === "tr") return tr_social_compat_intro(inputs)
	if (locale === "zh") return zh_social_compat_intro(inputs)
	if (locale === "ja") return ja_social_compat_intro(inputs)
	return en_social_compat_intro(inputs)
});
