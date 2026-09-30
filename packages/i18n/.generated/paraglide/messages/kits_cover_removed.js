/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_RemovedInputs */

const en_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to the automatic cover`)
};

const es_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se ha vuelto a la portada automática`)
};

const de_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wieder automatisches Titelbild`)
};

const fr_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à la couverture automatique`)
};

const it_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tornato alla copertina automatica`)
};

const nl_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar het automatische omslag`)
};

const pl_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przywrócono okładkę automatyczną`)
};

const pt_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De volta à capa automática`)
};

const ru_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Возвращена автоматическая обложка`)
};

const sv_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till automatiskt omslag`)
};

const tr_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik kapağa dönüldü`)
};

const zh_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已恢复自动封面`)
};

const ja_kits_cover_removed = /** @type {(inputs: Kits_Cover_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自動カバーに戻しました`)
};

/**
* | output |
* | --- |
* | "Back to the automatic cover" |
*
* @param {Kits_Cover_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_removed = /** @type {((inputs?: Kits_Cover_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_removed(inputs)
	if (locale === "de") return de_kits_cover_removed(inputs)
	if (locale === "fr") return fr_kits_cover_removed(inputs)
	if (locale === "it") return it_kits_cover_removed(inputs)
	if (locale === "nl") return nl_kits_cover_removed(inputs)
	if (locale === "pl") return pl_kits_cover_removed(inputs)
	if (locale === "pt") return pt_kits_cover_removed(inputs)
	if (locale === "ru") return ru_kits_cover_removed(inputs)
	if (locale === "sv") return sv_kits_cover_removed(inputs)
	if (locale === "tr") return tr_kits_cover_removed(inputs)
	if (locale === "zh") return zh_kits_cover_removed(inputs)
	if (locale === "ja") return ja_kits_cover_removed(inputs)
	return en_kits_cover_removed(inputs)
});
