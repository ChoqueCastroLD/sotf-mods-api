/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_No_SanctionsInputs */

const en_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No sanctions, ever.`)
};

const es_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nunca ha tenido sanciones.`)
};

const de_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch nie sanktioniert.`)
};

const fr_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune sanction, jamais.`)
};

const it_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna sanzione, mai.`)
};

const nl_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nooit een sanctie gehad.`)
};

const pl_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nigdy nie miał sankcji.`)
};

const pt_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma sanção, nunca.`)
};

const ru_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Санкций никогда не было.`)
};

const sv_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aldrig några sanktioner.`)
};

const tr_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hiç yaptırım almamış.`)
};

const zh_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从未受过处罚。`)
};

const ja_ranger_user_no_sanctions = /** @type {(inputs: Ranger_User_No_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制裁を受けたことはありません。`)
};

/**
* | output |
* | --- |
* | "No sanctions, ever." |
*
* @param {Ranger_User_No_SanctionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_no_sanctions = /** @type {((inputs?: Ranger_User_No_SanctionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_No_SanctionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_no_sanctions(inputs)
	if (locale === "de") return de_ranger_user_no_sanctions(inputs)
	if (locale === "fr") return fr_ranger_user_no_sanctions(inputs)
	if (locale === "it") return it_ranger_user_no_sanctions(inputs)
	if (locale === "nl") return nl_ranger_user_no_sanctions(inputs)
	if (locale === "pl") return pl_ranger_user_no_sanctions(inputs)
	if (locale === "pt") return pt_ranger_user_no_sanctions(inputs)
	if (locale === "ru") return ru_ranger_user_no_sanctions(inputs)
	if (locale === "sv") return sv_ranger_user_no_sanctions(inputs)
	if (locale === "tr") return tr_ranger_user_no_sanctions(inputs)
	if (locale === "zh") return zh_ranger_user_no_sanctions(inputs)
	if (locale === "ja") return ja_ranger_user_no_sanctions(inputs)
	return en_ranger_user_no_sanctions(inputs)
});
