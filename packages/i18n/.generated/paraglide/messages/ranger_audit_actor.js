/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_ActorInputs */

const en_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actor handle`)
};

const es_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuario que actuó`)
};

const de_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle des Handelnden`)
};

const fr_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identifiant de l’acteur`)
};

const it_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle di chi ha agito`)
};

const nl_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle van de uitvoerder`)
};

const pl_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa wykonawcy`)
};

const pt_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuário que agiu`)
};

const ru_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ник исполнителя`)
};

const sv_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utförarens användarnamn`)
};

const tr_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İşlemi yapanın kullanıcı adı`)
};

const zh_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作者用户名`)
};

const ja_ranger_audit_actor = /** @type {(inputs: Ranger_Audit_ActorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作者のハンドル`)
};

/**
* | output |
* | --- |
* | "Actor handle" |
*
* @param {Ranger_Audit_ActorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_actor = /** @type {((inputs?: Ranger_Audit_ActorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_ActorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_actor(inputs)
	if (locale === "de") return de_ranger_audit_actor(inputs)
	if (locale === "fr") return fr_ranger_audit_actor(inputs)
	if (locale === "it") return it_ranger_audit_actor(inputs)
	if (locale === "nl") return nl_ranger_audit_actor(inputs)
	if (locale === "pl") return pl_ranger_audit_actor(inputs)
	if (locale === "pt") return pt_ranger_audit_actor(inputs)
	if (locale === "ru") return ru_ranger_audit_actor(inputs)
	if (locale === "sv") return sv_ranger_audit_actor(inputs)
	if (locale === "tr") return tr_ranger_audit_actor(inputs)
	if (locale === "zh") return zh_ranger_audit_actor(inputs)
	if (locale === "ja") return ja_ranger_audit_actor(inputs)
	return en_ranger_audit_actor(inputs)
});
