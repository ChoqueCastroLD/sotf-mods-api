/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Own_KitInputs */

const en_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You cannot follow your own kit.`)
};

const es_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No puedes seguir tu propio kit.`)
};

const de_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kannst deinem eigenen Kit nicht folgen.`)
};

const fr_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous ne pouvez pas suivre votre propre kit.`)
};

const it_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non puoi seguire il tuo kit.`)
};

const nl_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kunt je eigen kit niet volgen.`)
};

const pl_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie możesz obserwować własnego zestawu.`)
};

const pt_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você não pode seguir o seu próprio kit.`)
};

const ru_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нельзя подписаться на собственный набор.`)
};

const sv_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan inte följa ditt eget kit.`)
};

const tr_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kendi kitini takip edemezsin.`)
};

const zh_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不能关注自己的套件。`)
};

const ja_kitsocial_own_kit = /** @type {(inputs: Kitsocial_Own_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分のキットはフォローできません。`)
};

/**
* | output |
* | --- |
* | "You cannot follow your own kit." |
*
* @param {Kitsocial_Own_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_own_kit = /** @type {((inputs?: Kitsocial_Own_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Own_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_own_kit(inputs)
	if (locale === "de") return de_kitsocial_own_kit(inputs)
	if (locale === "fr") return fr_kitsocial_own_kit(inputs)
	if (locale === "it") return it_kitsocial_own_kit(inputs)
	if (locale === "nl") return nl_kitsocial_own_kit(inputs)
	if (locale === "pl") return pl_kitsocial_own_kit(inputs)
	if (locale === "pt") return pt_kitsocial_own_kit(inputs)
	if (locale === "ru") return ru_kitsocial_own_kit(inputs)
	if (locale === "sv") return sv_kitsocial_own_kit(inputs)
	if (locale === "tr") return tr_kitsocial_own_kit(inputs)
	if (locale === "zh") return zh_kitsocial_own_kit(inputs)
	if (locale === "ja") return ja_kitsocial_own_kit(inputs)
	return en_kitsocial_own_kit(inputs)
});
