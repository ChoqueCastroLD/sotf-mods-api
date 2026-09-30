/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_HeadingInputs */

const en_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Did it work in your game?`)
};

const es_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Te funcionó en tu partida?`)
};

const de_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hat es in deinem Spiel funktioniert?`)
};

const fr_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ça a marché dans votre partie ?`)
};

const it_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ha funzionato nella tua partita?`)
};

const nl_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkte het in je game?`)
};

const pl_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czy działało w twojej grze?`)
};

const pt_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funcionou no seu jogo?`)
};

const ru_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сработало в вашей игре?`)
};

const sv_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerade det i ditt spel?`)
};

const tr_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyununda çalıştı mı?`)
};

const zh_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在你的游戏里能用吗？`)
};

const ja_social_compat_heading = /** @type {(inputs: Social_Compat_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームで動きましたか？`)
};

/**
* | output |
* | --- |
* | "Did it work in your game?" |
*
* @param {Social_Compat_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_heading = /** @type {((inputs?: Social_Compat_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_heading(inputs)
	if (locale === "de") return de_social_compat_heading(inputs)
	if (locale === "fr") return fr_social_compat_heading(inputs)
	if (locale === "it") return it_social_compat_heading(inputs)
	if (locale === "nl") return nl_social_compat_heading(inputs)
	if (locale === "pl") return pl_social_compat_heading(inputs)
	if (locale === "pt") return pt_social_compat_heading(inputs)
	if (locale === "ru") return ru_social_compat_heading(inputs)
	if (locale === "sv") return sv_social_compat_heading(inputs)
	if (locale === "tr") return tr_social_compat_heading(inputs)
	if (locale === "zh") return zh_social_compat_heading(inputs)
	if (locale === "ja") return ja_social_compat_heading(inputs)
	return en_social_compat_heading(inputs)
});
