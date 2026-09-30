/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Recat_PartialInputs */

const en_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} change was applied before the error.`);
	return /** @type {LocalizedString} */ (`${count__number} changes were applied before the error.`)
	
};

const es_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Se aplicó ${count__number} cambio antes del error.`);
	return /** @type {LocalizedString} */ (`Se aplicaron ${count__number} cambios antes del error.`)
	
};

const de_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Änderung wurde vor dem Fehler angewendet.`);
	return /** @type {LocalizedString} */ (`${count__number} Änderungen wurden vor dem Fehler angewendet.`)
	
};

const fr_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} changement a été appliqué avant l’erreur.`);
	return /** @type {LocalizedString} */ (`${count__number} changements ont été appliqués avant l’erreur.`)
	
};

const it_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modifica è stata applicata prima dell’errore.`);
	return /** @type {LocalizedString} */ (`${count__number} modifiche sono state applicate prima dell’errore.`)
	
};

const nl_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wijziging is vóór de fout toegepast.`);
	return /** @type {LocalizedString} */ (`${count__number} wijzigingen zijn vóór de fout toegepast.`)
	
};

const pl_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Przed błędem zastosowano ${count__number} zmianę.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Przed błędem zastosowano ${count__number} zmiany.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Przed błędem zastosowano ${count__number} zmian.`);
	return /** @type {LocalizedString} */ (`Przed błędem zastosowano ${count__number} zmiany.`)
	
};

const pt_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} alteração foi aplicada antes do erro.`);
	return /** @type {LocalizedString} */ (`${count__number} alterações foram aplicadas antes do erro.`)
	
};

const ru_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`До ошибки применено ${count__number} изменение.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`До ошибки применено ${count__number} изменения.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`До ошибки применено ${count__number} изменений.`);
	return /** @type {LocalizedString} */ (`До ошибки применено ${count__number} изменения.`)
	
};

const sv_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ändring tillämpades före felet.`);
	return /** @type {LocalizedString} */ (`${count__number} ändringar tillämpades före felet.`)
	
};

const tr_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Hatadan önce ${count__number} değişiklik uygulandı.`);
	return /** @type {LocalizedString} */ (`Hatadan önce ${count__number} değişiklik uygulandı.`)
	
};

const zh_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`出错前已应用 ${count__number} 项更改。`)
};

const ja_admin_recat_partial = /** @type {(inputs: Admin_Recat_PartialInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`エラーの前に ${count__number} 件の変更が適用されました。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} change was applied before the error." |
* | * | "{count__number} changes were applied before the error." |
*
* @param {Admin_Recat_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_partial = /** @type {((inputs: Admin_Recat_PartialInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_PartialInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_partial(inputs)
	if (locale === "de") return de_admin_recat_partial(inputs)
	if (locale === "fr") return fr_admin_recat_partial(inputs)
	if (locale === "it") return it_admin_recat_partial(inputs)
	if (locale === "nl") return nl_admin_recat_partial(inputs)
	if (locale === "pl") return pl_admin_recat_partial(inputs)
	if (locale === "pt") return pt_admin_recat_partial(inputs)
	if (locale === "ru") return ru_admin_recat_partial(inputs)
	if (locale === "sv") return sv_admin_recat_partial(inputs)
	if (locale === "tr") return tr_admin_recat_partial(inputs)
	if (locale === "zh") return zh_admin_recat_partial(inputs)
	if (locale === "ja") return ja_admin_recat_partial(inputs)
	return en_admin_recat_partial(inputs)
});
