/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Badges_All_EarnedInputs */

const en_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You earned every badge there is to see.`)
};

const es_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Has conseguido todas las insignias visibles.`)
};

const de_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast jedes sichtbare Abzeichen verdient.`)
};

const fr_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu as obtenu tous les badges visibles.`)
};

const it_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai ottenuto tutti i distintivi visibili.`)
};

const nl_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt elke zichtbare badge verdiend.`)
};

const pl_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zdobyłeś wszystkie widoczne odznaki.`)
};

const pt_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você conquistou todas as insígnias visíveis.`)
};

const ru_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы получили все видимые значки.`)
};

const sv_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har tjänat alla synliga märken.`)
};

const tr_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görünen tüm rozetleri kazandın.`)
};

const zh_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已获得所有可见的徽章。`)
};

const ja_basecamp_badges_all_earned = /** @type {(inputs: Basecamp_Badges_All_EarnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示されているバッジはすべて獲得済みです。`)
};

/**
* | output |
* | --- |
* | "You earned every badge there is to see." |
*
* @param {Basecamp_Badges_All_EarnedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_all_earned = /** @type {((inputs?: Basecamp_Badges_All_EarnedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_All_EarnedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_all_earned(inputs)
	if (locale === "de") return de_basecamp_badges_all_earned(inputs)
	if (locale === "fr") return fr_basecamp_badges_all_earned(inputs)
	if (locale === "it") return it_basecamp_badges_all_earned(inputs)
	if (locale === "nl") return nl_basecamp_badges_all_earned(inputs)
	if (locale === "pl") return pl_basecamp_badges_all_earned(inputs)
	if (locale === "pt") return pt_basecamp_badges_all_earned(inputs)
	if (locale === "ru") return ru_basecamp_badges_all_earned(inputs)
	if (locale === "sv") return sv_basecamp_badges_all_earned(inputs)
	if (locale === "tr") return tr_basecamp_badges_all_earned(inputs)
	if (locale === "zh") return zh_basecamp_badges_all_earned(inputs)
	if (locale === "ja") return ja_basecamp_badges_all_earned(inputs)
	return en_basecamp_badges_all_earned(inputs)
});
