/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_RemovedInputs */

const en_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bundle removed.`)
};

const es_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paquete eliminado.`)
};

const de_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paket entfernt.`)
};

const fr_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pack retiré.`)
};

const it_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pacchetto rimosso.`)
};

const nl_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pakket verwijderd.`)
};

const pl_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pakiet usunięty.`)
};

const pt_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pacote removido.`)
};

const ru_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Набор убран.`)
};

const sv_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paketet är borttaget.`)
};

const tr_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paket kaldırıldı.`)
};

const zh_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包已移除。`)
};

const ja_bundles_removed = /** @type {(inputs: Bundles_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バンドルを削除しました。`)
};

/**
* | output |
* | --- |
* | "Bundle removed." |
*
* @param {Bundles_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_removed = /** @type {((inputs?: Bundles_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_removed(inputs)
	if (locale === "de") return de_bundles_removed(inputs)
	if (locale === "fr") return fr_bundles_removed(inputs)
	if (locale === "it") return it_bundles_removed(inputs)
	if (locale === "nl") return nl_bundles_removed(inputs)
	if (locale === "pl") return pl_bundles_removed(inputs)
	if (locale === "pt") return pt_bundles_removed(inputs)
	if (locale === "ru") return ru_bundles_removed(inputs)
	if (locale === "sv") return sv_bundles_removed(inputs)
	if (locale === "tr") return tr_bundles_removed(inputs)
	if (locale === "zh") return zh_bundles_removed(inputs)
	if (locale === "ja") return ja_bundles_removed(inputs)
	return en_bundles_removed(inputs)
});
