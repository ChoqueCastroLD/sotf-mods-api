/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ visible: NonNullable<unknown>, total: NonNullable<unknown>, selected: NonNullable<unknown> }} Admin_Recat_CountsInputs */

const en_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {const visible__plural = registry.plural("en", i?.visible, {});
	const visible__number = registry.number("en", i?.visible, {});
	if (visible__plural === "one") return /** @type {LocalizedString} */ (`${visible__number} row shown of ${i?.total} · ${i?.selected} selected`);
	return /** @type {LocalizedString} */ (`${visible__number} rows shown of ${i?.total} · ${i?.selected} selected`)
	
};

const es_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {const visible__plural = registry.plural("es", i?.visible, {});
	const visible__number = registry.number("es", i?.visible, {});
	if (visible__plural === "one") return /** @type {LocalizedString} */ (`${visible__number} fila visible de ${i?.total} · ${i?.selected} seleccionadas`);
	return /** @type {LocalizedString} */ (`${visible__number} filas visibles de ${i?.total} · ${i?.selected} seleccionadas`)
	
};

const de_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {const visible__plural = registry.plural("de", i?.visible, {});
	const visible__number = registry.number("de", i?.visible, {});
	if (visible__plural === "one") return /** @type {LocalizedString} */ (`${visible__number} Zeile angezeigt von ${i?.total} · ${i?.selected} ausgewählt`);
	return /** @type {LocalizedString} */ (`${visible__number} Zeilen angezeigt von ${i?.total} · ${i?.selected} ausgewählt`)
	
};

const fr_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {const visible__plural = registry.plural("fr", i?.visible, {});
	const visible__number = registry.number("fr", i?.visible, {});
	if (visible__plural === "one") return /** @type {LocalizedString} */ (`${visible__number} ligne affichée sur ${i?.total} · ${i?.selected} sélectionnées`);
	return /** @type {LocalizedString} */ (`${visible__number} lignes affichées sur ${i?.total} · ${i?.selected} sélectionnées`)
	
};

const it_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {const visible__plural = registry.plural("it", i?.visible, {});
	const visible__number = registry.number("it", i?.visible, {});
	if (visible__plural === "one") return /** @type {LocalizedString} */ (`${visible__number} riga mostrata su ${i?.total} · ${i?.selected} selezionate`);
	return /** @type {LocalizedString} */ (`${visible__number} righe mostrate su ${i?.total} · ${i?.selected} selezionate`)
	
};

const nl_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {const visible__plural = registry.plural("nl", i?.visible, {});
	const visible__number = registry.number("nl", i?.visible, {});
	if (visible__plural === "one") return /** @type {LocalizedString} */ (`${visible__number} rij getoond van ${i?.total} · ${i?.selected} geselecteerd`);
	return /** @type {LocalizedString} */ (`${visible__number} rijen getoond van ${i?.total} · ${i?.selected} geselecteerd`)
	
};

const pl_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {const visible__plural = registry.plural("pl", i?.visible, {});
	const visible__number = registry.number("pl", i?.visible, {});
	if (visible__plural === "one") return /** @type {LocalizedString} */ (`Widoczne wiersze: ${visible__number} z ${i?.total} · zaznaczone: ${i?.selected}`);
	if (visible__plural === "few") return /** @type {LocalizedString} */ (`Widoczne wiersze: ${visible__number} z ${i?.total} · zaznaczone: ${i?.selected}`);
	if (visible__plural === "many") return /** @type {LocalizedString} */ (`Widoczne wiersze: ${visible__number} z ${i?.total} · zaznaczone: ${i?.selected}`);
	return /** @type {LocalizedString} */ (`Widoczne wiersze: ${visible__number} z ${i?.total} · zaznaczone: ${i?.selected}`)
	
};

const pt_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {const visible__plural = registry.plural("pt", i?.visible, {});
	const visible__number = registry.number("pt", i?.visible, {});
	if (visible__plural === "one") return /** @type {LocalizedString} */ (`${visible__number} linha exibida de ${i?.total} · ${i?.selected} selecionadas`);
	return /** @type {LocalizedString} */ (`${visible__number} linhas exibidas de ${i?.total} · ${i?.selected} selecionadas`)
	
};

const ru_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {const visible__plural = registry.plural("ru", i?.visible, {});
	const visible__number = registry.number("ru", i?.visible, {});
	if (visible__plural === "one") return /** @type {LocalizedString} */ (`Показано строк: ${visible__number} из ${i?.total} · выбрано: ${i?.selected}`);
	if (visible__plural === "few") return /** @type {LocalizedString} */ (`Показано строк: ${visible__number} из ${i?.total} · выбрано: ${i?.selected}`);
	if (visible__plural === "many") return /** @type {LocalizedString} */ (`Показано строк: ${visible__number} из ${i?.total} · выбрано: ${i?.selected}`);
	return /** @type {LocalizedString} */ (`Показано строк: ${visible__number} из ${i?.total} · выбрано: ${i?.selected}`)
	
};

const sv_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {const visible__plural = registry.plural("sv", i?.visible, {});
	const visible__number = registry.number("sv", i?.visible, {});
	if (visible__plural === "one") return /** @type {LocalizedString} */ (`${visible__number} rad visas av ${i?.total} · ${i?.selected} markerade`);
	return /** @type {LocalizedString} */ (`${visible__number} rader visas av ${i?.total} · ${i?.selected} markerade`)
	
};

const tr_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {const visible__plural = registry.plural("tr", i?.visible, {});
	const visible__number = registry.number("tr", i?.visible, {});
	if (visible__plural === "one") return /** @type {LocalizedString} */ (`${i?.total} satırdan ${visible__number} satır gösteriliyor · ${i?.selected} seçili`);
	return /** @type {LocalizedString} */ (`${i?.total} satırdan ${visible__number} satır gösteriliyor · ${i?.selected} seçili`)
	
};

const zh_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {
	const visible__plural = registry.plural("zh", i?.visible, {});
	const visible__number = registry.number("zh", i?.visible, {});return /** @type {LocalizedString} */ (`显示 ${visible__number} 行，共 ${i?.total} 行 · 已选 ${i?.selected}`)
};

const ja_admin_recat_counts = /** @type {(inputs: Admin_Recat_CountsInputs) => LocalizedString} */ (i) => {
	const visible__plural = registry.plural("ja", i?.visible, {});
	const visible__number = registry.number("ja", i?.visible, {});return /** @type {LocalizedString} */ (`${i?.total} 行中 ${visible__number} 行を表示 · ${i?.selected} 行選択中`)
};

/**
* | visible__plural | output |
* | --- | --- |
* | "one" | "{visible__number} row shown of {total} · {selected} selected" |
* | * | "{visible__number} rows shown of {total} · {selected} selected" |
*
* @param {Admin_Recat_CountsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_counts = /** @type {((inputs: Admin_Recat_CountsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_CountsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_counts(inputs)
	if (locale === "de") return de_admin_recat_counts(inputs)
	if (locale === "fr") return fr_admin_recat_counts(inputs)
	if (locale === "it") return it_admin_recat_counts(inputs)
	if (locale === "nl") return nl_admin_recat_counts(inputs)
	if (locale === "pl") return pl_admin_recat_counts(inputs)
	if (locale === "pt") return pt_admin_recat_counts(inputs)
	if (locale === "ru") return ru_admin_recat_counts(inputs)
	if (locale === "sv") return sv_admin_recat_counts(inputs)
	if (locale === "tr") return tr_admin_recat_counts(inputs)
	if (locale === "zh") return zh_admin_recat_counts(inputs)
	if (locale === "ja") return ja_admin_recat_counts(inputs)
	return en_admin_recat_counts(inputs)
});
