/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_No_PicksInputs */

const en_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout found no mod that fits. Try describing it differently.`)
};

const es_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout no ha encontrado ningún mod que encaje. Prueba a describirlo de otra forma.`)
};

const de_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout hat keine passende Mod gefunden. Versuche es anders zu beschreiben.`)
};

const fr_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout n’a trouvé aucun mod adapté. Essaie de le décrire autrement.`)
};

const it_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout non ha trovato nessuna mod adatta. Prova a descriverla in modo diverso.`)
};

const nl_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout vond geen passende mod. Probeer het anders te omschrijven.`)
};

const pl_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout nie znalazł pasującego moda. Spróbuj opisać go inaczej.`)
};

const pt_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O Scout não encontrou nenhum mod adequado. Tenta descrevê-lo de outra forma.`)
};

const ru_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout не нашёл подходящего мода. Попробуйте описать иначе.`)
};

const sv_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout hittade ingen modd som passar. Försök beskriva den på ett annat sätt.`)
};

const tr_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout uygun bir mod bulamadı. Farklı şekilde anlatmayı dene.`)
};

const zh_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout 没有找到合适的模组。换种说法试试。`)
};

const ja_cmdk_scout_no_picks = /** @type {(inputs: Cmdk_Scout_No_PicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合うModは見つかりませんでした。言い方を変えてみてください。`)
};

/**
* | output |
* | --- |
* | "Scout found no mod that fits. Try describing it differently." |
*
* @param {Cmdk_Scout_No_PicksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_no_picks = /** @type {((inputs?: Cmdk_Scout_No_PicksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_No_PicksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_no_picks(inputs)
	if (locale === "de") return de_cmdk_scout_no_picks(inputs)
	if (locale === "fr") return fr_cmdk_scout_no_picks(inputs)
	if (locale === "it") return it_cmdk_scout_no_picks(inputs)
	if (locale === "nl") return nl_cmdk_scout_no_picks(inputs)
	if (locale === "pl") return pl_cmdk_scout_no_picks(inputs)
	if (locale === "pt") return pt_cmdk_scout_no_picks(inputs)
	if (locale === "ru") return ru_cmdk_scout_no_picks(inputs)
	if (locale === "sv") return sv_cmdk_scout_no_picks(inputs)
	if (locale === "tr") return tr_cmdk_scout_no_picks(inputs)
	if (locale === "zh") return zh_cmdk_scout_no_picks(inputs)
	if (locale === "ja") return ja_cmdk_scout_no_picks(inputs)
	return en_cmdk_scout_no_picks(inputs)
});
