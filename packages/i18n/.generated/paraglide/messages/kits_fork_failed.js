/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Fork_FailedInputs */

const en_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t fork the kit. Try again.`)
};

const es_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido copiar el kit. Inténtalo de nuevo.`)
};

const de_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Kit konnte nicht geforkt werden. Versuch es noch einmal.`)
};

const fr_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de dupliquer le kit. Réessayez.`)
};

const it_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile fare il fork del kit. Riprova.`)
};

const nl_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De kit kon niet worden geforkt. Probeer het opnieuw.`)
};

const pl_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się skopiować zestawu. Spróbuj ponownie.`)
};

const pt_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível copiar o kit. Tente de novo.`)
};

const ru_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось скопировать набор. Попробуйте ещё раз.`)
};

const sv_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att forka kitet. Försök igen.`)
};

const tr_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit kopyalanamadı. Tekrar dene.`)
};

const zh_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复刻套装失败，请重试。`)
};

const ja_kits_fork_failed = /** @type {(inputs: Kits_Fork_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットをフォークできませんでした。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Couldn’t fork the kit. Try again." |
*
* @param {Kits_Fork_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_fork_failed = /** @type {((inputs?: Kits_Fork_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Fork_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_fork_failed(inputs)
	if (locale === "de") return de_kits_fork_failed(inputs)
	if (locale === "fr") return fr_kits_fork_failed(inputs)
	if (locale === "it") return it_kits_fork_failed(inputs)
	if (locale === "nl") return nl_kits_fork_failed(inputs)
	if (locale === "pl") return pl_kits_fork_failed(inputs)
	if (locale === "pt") return pt_kits_fork_failed(inputs)
	if (locale === "ru") return ru_kits_fork_failed(inputs)
	if (locale === "sv") return sv_kits_fork_failed(inputs)
	if (locale === "tr") return tr_kits_fork_failed(inputs)
	if (locale === "zh") return zh_kits_fork_failed(inputs)
	if (locale === "ja") return ja_kits_fork_failed(inputs)
	return en_kits_fork_failed(inputs)
});
