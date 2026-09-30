/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Notes_HintInputs */

const en_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The latest updates from creators`)
};

const es_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las últimas actualizaciones de los creadores`)
};

const de_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die neuesten Updates der Ersteller`)
};

const fr_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les dernières mises à jour des créateurs`)
};

const it_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gli ultimi aggiornamenti dei creatori`)
};

const nl_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De nieuwste updates van makers`)
};

const pl_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze aktualizacje od twórców`)
};

const pt_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As atualizações mais recentes dos criadores`)
};

const ru_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последние обновления от авторов`)
};

const sv_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De senaste uppdateringarna från skaparna`)
};

const tr_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcılardan son güncellemeler`)
};

const zh_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者的最新更新`)
};

const ja_landing_notes_hint = /** @type {(inputs: Landing_Notes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターの最新アップデート`)
};

/**
* | output |
* | --- |
* | "The latest updates from creators" |
*
* @param {Landing_Notes_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_notes_hint = /** @type {((inputs?: Landing_Notes_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Notes_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_notes_hint(inputs)
	if (locale === "de") return de_landing_notes_hint(inputs)
	if (locale === "fr") return fr_landing_notes_hint(inputs)
	if (locale === "it") return it_landing_notes_hint(inputs)
	if (locale === "nl") return nl_landing_notes_hint(inputs)
	if (locale === "pl") return pl_landing_notes_hint(inputs)
	if (locale === "pt") return pt_landing_notes_hint(inputs)
	if (locale === "ru") return ru_landing_notes_hint(inputs)
	if (locale === "sv") return sv_landing_notes_hint(inputs)
	if (locale === "tr") return tr_landing_notes_hint(inputs)
	if (locale === "zh") return zh_landing_notes_hint(inputs)
	if (locale === "ja") return ja_landing_notes_hint(inputs)
	return en_landing_notes_hint(inputs)
});
