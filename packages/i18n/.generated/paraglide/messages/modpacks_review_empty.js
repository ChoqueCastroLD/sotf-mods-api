/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_EmptyInputs */

const en_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No modpacks are waiting.`)
};

const es_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay modpacks esperando.`)
};

const de_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Modpacks warten.`)
};

const fr_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun modpack en attente.`)
};

const it_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun modpack in attesa.`)
};

const nl_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er wachten geen modpacks.`)
};

const pl_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden modpack nie czeka.`)
};

const pt_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum modpack aguardando.`)
};

const ru_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет модпаков на проверке.`)
};

const sv_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga modpaket väntar.`)
};

const tr_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekleyen mod paketi yok.`)
};

const zh_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有等待审核的整合包。`)
};

const ja_modpacks_review_empty = /** @type {(inputs: Modpacks_Review_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認待ちの Modパックはありません。`)
};

/**
* | output |
* | --- |
* | "No modpacks are waiting." |
*
* @param {Modpacks_Review_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_empty = /** @type {((inputs?: Modpacks_Review_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_empty(inputs)
	if (locale === "de") return de_modpacks_review_empty(inputs)
	if (locale === "fr") return fr_modpacks_review_empty(inputs)
	if (locale === "it") return it_modpacks_review_empty(inputs)
	if (locale === "nl") return nl_modpacks_review_empty(inputs)
	if (locale === "pl") return pl_modpacks_review_empty(inputs)
	if (locale === "pt") return pt_modpacks_review_empty(inputs)
	if (locale === "ru") return ru_modpacks_review_empty(inputs)
	if (locale === "sv") return sv_modpacks_review_empty(inputs)
	if (locale === "tr") return tr_modpacks_review_empty(inputs)
	if (locale === "zh") return zh_modpacks_review_empty(inputs)
	if (locale === "ja") return ja_modpacks_review_empty(inputs)
	return en_modpacks_review_empty(inputs)
});
