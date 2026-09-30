/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Dependencies_EmptyInputs */

const en_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No dependencies. Drop it in and play.`)
};

const es_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin dependencias. Ponlo y a jugar.`)
};

const de_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Abhängigkeiten. Reinlegen und losspielen.`)
};

const fr_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune dépendance. Installez-le et jouez.`)
};

const it_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna dipendenza. Mettila e gioca.`)
};

const nl_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen afhankelijkheden. Erin zetten en spelen.`)
};

const pl_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak zależności. Wrzuć i graj.`)
};

const pt_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem dependências. É só colocar e jogar.`)
};

const ru_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимостей нет. Установите и играйте.`)
};

const sv_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga beroenden. Släpp in den och spela.`)
};

const tr_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılık yok. At ve oyna.`)
};

const zh_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有依赖项。放进去就能玩。`)
};

const ja_ui_domain_dependencies_empty = /** @type {(inputs: Ui_Domain_Dependencies_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前提 MOD はありません。入れるだけで遊べます。`)
};

/**
* | output |
* | --- |
* | "No dependencies. Drop it in and play." |
*
* @param {Ui_Domain_Dependencies_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dependencies_empty = /** @type {((inputs?: Ui_Domain_Dependencies_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependencies_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dependencies_empty(inputs)
	if (locale === "de") return de_ui_domain_dependencies_empty(inputs)
	if (locale === "fr") return fr_ui_domain_dependencies_empty(inputs)
	if (locale === "it") return it_ui_domain_dependencies_empty(inputs)
	if (locale === "nl") return nl_ui_domain_dependencies_empty(inputs)
	if (locale === "pl") return pl_ui_domain_dependencies_empty(inputs)
	if (locale === "pt") return pt_ui_domain_dependencies_empty(inputs)
	if (locale === "ru") return ru_ui_domain_dependencies_empty(inputs)
	if (locale === "sv") return sv_ui_domain_dependencies_empty(inputs)
	if (locale === "tr") return tr_ui_domain_dependencies_empty(inputs)
	if (locale === "zh") return zh_ui_domain_dependencies_empty(inputs)
	if (locale === "ja") return ja_ui_domain_dependencies_empty(inputs)
	return en_ui_domain_dependencies_empty(inputs)
});
