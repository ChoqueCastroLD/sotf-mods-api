/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, name: NonNullable<unknown> }} Admin_Recat_Bulk_Set_DoneInputs */

const en_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} row set to ${i?.name}`);
	return /** @type {LocalizedString} */ (`${count__number} rows set to ${i?.name}`)
	
};

const es_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} fila pasada a ${i?.name}`);
	return /** @type {LocalizedString} */ (`${count__number} filas pasadas a ${i?.name}`)
	
};

const de_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Zeile auf ${i?.name} gesetzt`);
	return /** @type {LocalizedString} */ (`${count__number} Zeilen auf ${i?.name} gesetzt`)
	
};

const fr_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ligne passée en ${i?.name}`);
	return /** @type {LocalizedString} */ (`${count__number} lignes passées en ${i?.name}`)
	
};

const it_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} riga impostata su ${i?.name}`);
	return /** @type {LocalizedString} */ (`${count__number} righe impostate su ${i?.name}`)
	
};

const nl_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} rij ingesteld op ${i?.name}`);
	return /** @type {LocalizedString} */ (`${count__number} rijen ingesteld op ${i?.name}`)
	
};

const pl_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wiersz ustawiono na ${i?.name}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} wiersze ustawiono na ${i?.name}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} wierszy ustawiono na ${i?.name}`);
	return /** @type {LocalizedString} */ (`${count__number} wiersza ustawiono na ${i?.name}`)
	
};

const pt_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} linha definida como ${i?.name}`);
	return /** @type {LocalizedString} */ (`${count__number} linhas definidas como ${i?.name}`)
	
};

const ru_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} строке назначено: ${i?.name}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} строкам назначено: ${i?.name}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} строкам назначено: ${i?.name}`);
	return /** @type {LocalizedString} */ (`${count__number} строки назначено: ${i?.name}`)
	
};

const sv_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} rad satta till ${i?.name}`);
	return /** @type {LocalizedString} */ (`${count__number} rader satta till ${i?.name}`)
	
};

const tr_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} satır ${i?.name} olarak ayarlandı`);
	return /** @type {LocalizedString} */ (`${count__number} satır ${i?.name} olarak ayarlandı`)
	
};

const zh_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 行已设为 ${i?.name}`)
};

const ja_admin_recat_bulk_set_done = /** @type {(inputs: Admin_Recat_Bulk_Set_DoneInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 行を ${i?.name} に設定しました`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} row set to {name}" |
* | * | "{count__number} rows set to {name}" |
*
* @param {Admin_Recat_Bulk_Set_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_bulk_set_done = /** @type {((inputs: Admin_Recat_Bulk_Set_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Bulk_Set_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_bulk_set_done(inputs)
	if (locale === "de") return de_admin_recat_bulk_set_done(inputs)
	if (locale === "fr") return fr_admin_recat_bulk_set_done(inputs)
	if (locale === "it") return it_admin_recat_bulk_set_done(inputs)
	if (locale === "nl") return nl_admin_recat_bulk_set_done(inputs)
	if (locale === "pl") return pl_admin_recat_bulk_set_done(inputs)
	if (locale === "pt") return pt_admin_recat_bulk_set_done(inputs)
	if (locale === "ru") return ru_admin_recat_bulk_set_done(inputs)
	if (locale === "sv") return sv_admin_recat_bulk_set_done(inputs)
	if (locale === "tr") return tr_admin_recat_bulk_set_done(inputs)
	if (locale === "zh") return zh_admin_recat_bulk_set_done(inputs)
	if (locale === "ja") return ja_admin_recat_bulk_set_done(inputs)
	return en_admin_recat_bulk_set_done(inputs)
});
