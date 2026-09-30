/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Picks_TitleInputs */

const en_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Find your next mod`)
};

const es_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encuentra tu próximo mod`)
};

const de_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finde deinen nächsten Mod`)
};

const fr_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trouvez votre prochain mod`)
};

const it_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trova la tua prossima mod`)
};

const nl_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vind je volgende mod`)
};

const pl_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znajdź swój następny mod`)
};

const pt_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encontre o seu próximo mod`)
};

const ru_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Найдите свой следующий мод`)
};

const sv_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hitta din nästa mod`)
};

const tr_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir sonraki modunu bul`)
};

const zh_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发现你的下一个模组`)
};

const ja_landing_picks_title = /** @type {(inputs: Landing_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次のMODを見つけよう`)
};

/**
* | output |
* | --- |
* | "Find your next mod" |
*
* @param {Landing_Picks_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_picks_title = /** @type {((inputs?: Landing_Picks_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Picks_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_picks_title(inputs)
	if (locale === "de") return de_landing_picks_title(inputs)
	if (locale === "fr") return fr_landing_picks_title(inputs)
	if (locale === "it") return it_landing_picks_title(inputs)
	if (locale === "nl") return nl_landing_picks_title(inputs)
	if (locale === "pl") return pl_landing_picks_title(inputs)
	if (locale === "pt") return pt_landing_picks_title(inputs)
	if (locale === "ru") return ru_landing_picks_title(inputs)
	if (locale === "sv") return sv_landing_picks_title(inputs)
	if (locale === "tr") return tr_landing_picks_title(inputs)
	if (locale === "zh") return zh_landing_picks_title(inputs)
	if (locale === "ja") return ja_landing_picks_title(inputs)
	return en_landing_picks_title(inputs)
});
