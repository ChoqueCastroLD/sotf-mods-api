/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_EmptyInputs */

const en_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No bundles yet.`)
};

const es_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay paquetes.`)
};

const de_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Pakete.`)
};

const fr_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun pack pour l'instant.`)
};

const it_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun pacchetto.`)
};

const nl_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen pakketten.`)
};

const pl_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak pakietów.`)
};

const pt_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há pacotes.`)
};

const ru_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборов пока нет.`)
};

const sv_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga paket än.`)
};

const tr_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz paket yok.`)
};

const zh_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有整合包。`)
};

const ja_bundles_empty = /** @type {(inputs: Bundles_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだバンドルはありません。`)
};

/**
* | output |
* | --- |
* | "No bundles yet." |
*
* @param {Bundles_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_empty = /** @type {((inputs?: Bundles_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_empty(inputs)
	if (locale === "de") return de_bundles_empty(inputs)
	if (locale === "fr") return fr_bundles_empty(inputs)
	if (locale === "it") return it_bundles_empty(inputs)
	if (locale === "nl") return nl_bundles_empty(inputs)
	if (locale === "pl") return pl_bundles_empty(inputs)
	if (locale === "pt") return pt_bundles_empty(inputs)
	if (locale === "ru") return ru_bundles_empty(inputs)
	if (locale === "sv") return sv_bundles_empty(inputs)
	if (locale === "tr") return tr_bundles_empty(inputs)
	if (locale === "zh") return zh_bundles_empty(inputs)
	if (locale === "ja") return ja_bundles_empty(inputs)
	return en_bundles_empty(inputs)
});
