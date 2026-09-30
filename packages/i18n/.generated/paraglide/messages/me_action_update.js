/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Action_UpdateInputs */

const en_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get the update`)
};

const es_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar la actualización`)
};

const de_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update holen`)
};

const fr_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Récupérer la mise à jour`)
};

const it_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica l’aggiornamento`)
};

const nl_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update ophalen`)
};

const pl_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz aktualizację`)
};

const pt_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar a atualização`)
};

const ru_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать обновление`)
};

const sv_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hämta uppdateringen`)
};

const tr_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellemeyi al`)
};

const zh_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取更新`)
};

const ja_me_action_update = /** @type {(inputs: Me_Action_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップデートを入手`)
};

/**
* | output |
* | --- |
* | "Get the update" |
*
* @param {Me_Action_UpdateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_action_update = /** @type {((inputs?: Me_Action_UpdateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Action_UpdateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_action_update(inputs)
	if (locale === "de") return de_me_action_update(inputs)
	if (locale === "fr") return fr_me_action_update(inputs)
	if (locale === "it") return it_me_action_update(inputs)
	if (locale === "nl") return nl_me_action_update(inputs)
	if (locale === "pl") return pl_me_action_update(inputs)
	if (locale === "pt") return pt_me_action_update(inputs)
	if (locale === "ru") return ru_me_action_update(inputs)
	if (locale === "sv") return sv_me_action_update(inputs)
	if (locale === "tr") return tr_me_action_update(inputs)
	if (locale === "zh") return zh_me_action_update(inputs)
	if (locale === "ja") return ja_me_action_update(inputs)
	return en_me_action_update(inputs)
});
