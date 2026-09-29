/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_DisclaimerInputs */

const en_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods is an unofficial fan community. Not affiliated with or endorsed by Endnight Games Ltd. “Sons of the Forest” is a trademark of its owner.`)
};

const es_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods es una comunidad de fans no oficial. Sin afiliación ni respaldo de Endnight Games Ltd. «Sons of the Forest» es una marca registrada de su propietario.`)
};

const de_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods ist eine inoffizielle Fan-Community. Nicht mit Endnight Games Ltd. verbunden oder von ihr unterstützt. „Sons of the Forest“ ist eine Marke ihres Inhabers.`)
};

const fr_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods est une communauté de fans non officielle. Sans lien avec Endnight Games Ltd. ni approuvée par celle-ci. « Sons of the Forest » est une marque de son propriétaire.`)
};

const it_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods è una community di fan non ufficiale. Non è affiliata né approvata da Endnight Games Ltd. «Sons of the Forest» è un marchio del rispettivo proprietario.`)
};

const nl_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods is een onofficiële fancommunity. Niet verbonden aan of goedgekeurd door Endnight Games Ltd. ‘Sons of the Forest’ is een handelsmerk van de eigenaar.`)
};

const pl_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods to nieoficjalna społeczność fanów. Nie jest powiązana z Endnight Games Ltd. ani przez nią wspierana. „Sons of the Forest” jest znakiem towarowym swojego właściciela.`)
};

const pt_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods é uma comunidade de fãs não oficial. Sem afiliação nem endosso da Endnight Games Ltd. “Sons of the Forest” é uma marca registrada de seu proprietário.`)
};

const ru_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods — неофициальное фан-сообщество. Не связано с Endnight Games Ltd. и не одобрено ею. «Sons of the Forest» — товарный знак его владельца.`)
};

const sv_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods är en inofficiell fangemenskap. Inte knuten till eller godkänd av Endnight Games Ltd. ”Sons of the Forest” är ett varumärke som tillhör sin ägare.`)
};

const tr_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods resmî olmayan bir hayran topluluğudur. Endnight Games Ltd. ile bağlantılı değildir ve onun tarafından desteklenmez. “Sons of the Forest” sahibinin ticari markasıdır.`)
};

const zh_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 是非官方粉丝社区，与 Endnight Games Ltd. 无关联，也未获其认可。“Sons of the Forest”是其所有者的商标。`)
};

const ja_common_disclaimer = /** @type {(inputs: Common_DisclaimerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods は非公式のファンコミュニティです。Endnight Games Ltd. とは提携しておらず、同社の承認も受けていません。「Sons of the Forest」はその所有者の商標です。`)
};

/**
* | output |
* | --- |
* | "SOTF Mods is an unofficial fan community. Not affiliated with or endorsed by Endnight Games Ltd. “Sons of the Forest” is a trademark of its owner." |
*
* @param {Common_DisclaimerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_disclaimer = /** @type {((inputs?: Common_DisclaimerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_DisclaimerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_disclaimer(inputs)
	if (locale === "de") return de_common_disclaimer(inputs)
	if (locale === "fr") return fr_common_disclaimer(inputs)
	if (locale === "it") return it_common_disclaimer(inputs)
	if (locale === "nl") return nl_common_disclaimer(inputs)
	if (locale === "pl") return pl_common_disclaimer(inputs)
	if (locale === "pt") return pt_common_disclaimer(inputs)
	if (locale === "ru") return ru_common_disclaimer(inputs)
	if (locale === "sv") return sv_common_disclaimer(inputs)
	if (locale === "tr") return tr_common_disclaimer(inputs)
	if (locale === "zh") return zh_common_disclaimer(inputs)
	if (locale === "ja") return ja_common_disclaimer(inputs)
	return en_common_disclaimer(inputs)
});
