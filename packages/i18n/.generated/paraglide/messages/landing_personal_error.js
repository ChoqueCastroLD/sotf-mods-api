/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_ErrorInputs */

const en_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lost signal while loading your updates.`)
};

const es_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se perdió la señal al cargar tus actualizaciones.`)
};

const de_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beim Laden deiner Updates ist das Signal abgerissen.`)
};

const fr_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal perdu pendant le chargement de vos mises à jour.`)
};

const it_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnale perso durante il caricamento dei tuoi aggiornamenti.`)
};

const nl_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaal kwijt bij het laden van je updates.`)
};

const pl_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utracono sygnał podczas wczytywania aktualizacji.`)
};

const pt_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O sinal caiu ao carregar suas atualizações.`)
};

const ru_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сигнал пропал при загрузке ваших обновлений.`)
};

const sv_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalen försvann när dina uppdateringar laddades.`)
};

const tr_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellemelerin yüklenirken sinyal kayboldu.`)
};

const zh_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载你的更新时信号中断。`)
};

const ja_landing_personal_error = /** @type {(inputs: Landing_Personal_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップデートの読み込み中に信号が途切れました。`)
};

/**
* | output |
* | --- |
* | "Lost signal while loading your updates." |
*
* @param {Landing_Personal_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_error = /** @type {((inputs?: Landing_Personal_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_error(inputs)
	if (locale === "de") return de_landing_personal_error(inputs)
	if (locale === "fr") return fr_landing_personal_error(inputs)
	if (locale === "it") return it_landing_personal_error(inputs)
	if (locale === "nl") return nl_landing_personal_error(inputs)
	if (locale === "pl") return pl_landing_personal_error(inputs)
	if (locale === "pt") return pt_landing_personal_error(inputs)
	if (locale === "ru") return ru_landing_personal_error(inputs)
	if (locale === "sv") return sv_landing_personal_error(inputs)
	if (locale === "tr") return tr_landing_personal_error(inputs)
	if (locale === "zh") return zh_landing_personal_error(inputs)
	if (locale === "ja") return ja_landing_personal_error(inputs)
	return en_landing_personal_error(inputs)
});
