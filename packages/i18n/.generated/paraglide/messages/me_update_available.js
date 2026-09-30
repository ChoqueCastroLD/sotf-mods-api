/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Update_AvailableInputs */

const en_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update available`)
};

const es_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualización disponible`)
};

const de_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update verfügbar`)
};

const fr_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mise à jour disponible`)
};

const it_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamento disponibile`)
};

const nl_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update beschikbaar`)
};

const pl_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dostępna aktualizacja`)
};

const pt_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualização disponível`)
};

const ru_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доступно обновление`)
};

const sv_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdatering tillgänglig`)
};

const tr_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncelleme var`)
};

const zh_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有可用更新`)
};

const ja_me_update_available = /** @type {(inputs: Me_Update_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップデートあり`)
};

/**
* | output |
* | --- |
* | "Update available" |
*
* @param {Me_Update_AvailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_update_available = /** @type {((inputs?: Me_Update_AvailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Update_AvailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_update_available(inputs)
	if (locale === "de") return de_me_update_available(inputs)
	if (locale === "fr") return fr_me_update_available(inputs)
	if (locale === "it") return it_me_update_available(inputs)
	if (locale === "nl") return nl_me_update_available(inputs)
	if (locale === "pl") return pl_me_update_available(inputs)
	if (locale === "pt") return pt_me_update_available(inputs)
	if (locale === "ru") return ru_me_update_available(inputs)
	if (locale === "sv") return sv_me_update_available(inputs)
	if (locale === "tr") return tr_me_update_available(inputs)
	if (locale === "zh") return zh_me_update_available(inputs)
	if (locale === "ja") return ja_me_update_available(inputs)
	return en_me_update_available(inputs)
});
